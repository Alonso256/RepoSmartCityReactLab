import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ChartContainer } from './ChartContainer';
import Loader from '../../../Loader';

// Icono verde
const greenIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});



// Configuración del marcador
const markerConfig = {
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [15, 31],
  iconAnchor: [12, 31],
  popupAnchor: [1, -34],
  shadowSize: [31, 31]
};

// Crear el ícono personalizado
const customIcon = new L.Icon(markerConfig);

export function MapaContenedores() {
  const [contenedores, setContenedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Centro inicial del mapa (Madrid)
  const center = [40.4168, -3.7038];

  useEffect(() => {
    const fetchContenedores = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/asco/coords');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Datos recibidos:', data);
        setContenedores(data);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar los contenedores:', err);
        setError('Error al cargar los contenedores: ' + err.message);
        setLoading(false);
      }
    };

    fetchContenedores();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (!contenedores.length) {
    return (
      <div className="error-container">
        <p className="error-message">No se encontraron contenedores</p>
      </div>
    );
  }

  return (
    <ChartContainer title="Mapa de Contenedores por Ubicación">
      <div className="map-container">
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: '600px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {contenedores.map((contenedor, index) => {
            // Seleccionar el icono según el total de contenedores en el barrio
            let icon = greenIcon;
            if (contenedor.total < 5) {
              icon = redIcon; // Menos de 5 contenedores -> Rojo
            } else if (contenedor.total >= 5 && contenedor.total <= 10) {
              icon = yellowIcon; // Entre 5 y 10 contenedores -> Amarillo
            }

            return (
              <Marker
                key={index}
                position={[contenedor.LATITUD, contenedor.LONGITUD]}
                icon={icon}
              >
                <Popup>
                  <div className="popup-content">
                    <h3>Detalles del Contenedor</h3>
                    <p><strong>Distrito:</strong> {contenedor.Distrito || "N/A"}</p>
                    <p><strong>Dirección:</strong> {contenedor.DIRECCION || "N/A"}</p>
                    <p><strong>Contenedores en el barrio:</strong> {contenedor.total}</p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

      </div>
    </ChartContainer>
  );
}