import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

// URL de la API
const API_URL = "http://localhost:5000/contenedores/coords";

const Heatmap = () => {
  const [coordenadas, setCoordenadas] = useState([]);

  // Función para obtener las coordenadas desde la API
  const fetchCoordenadas = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Usa los datos directamente para el heatmap
      const heatData = data.map(({ LATITUD, LONGITUD, INTENSIDAD }) => [LATITUD, LONGITUD, INTENSIDAD]);
      setCoordenadas(heatData);
    } catch (error) {
      console.error("Error al obtener las coordenadas:", error.message);
    }
  };

  // Llama a la función fetchCoordenadas al montar el componente
  useEffect(() => {
    fetchCoordenadas();
  }, []);

  // Componente para agregar la capa de calor al mapa
  const HeatLayer = ({ data }) => {
    const map = useMap();

    useEffect(() => {
      if (!data || data.length === 0) return;

      const heat = L.heatLayer(data, {
        radius: 25, // Radio del punto
        blur: 15, // Suavizado
        maxZoom: 17, // Zoom máximo para mostrar detalles
        max: 1.0, // Máxima intensidad
      });

      heat.addTo(map);

      return () => {
        // Limpia el heatmap si el componente se desmonta o los datos cambian
        map.removeLayer(heat);
      };
    }, [map, data]);

    return null;
  };

  return (
    <MapContainer
      center={[40.7128, -74.006]} // Coordenadas iniciales (puedes cambiar a tu ubicación)
      zoom={13} // Nivel de zoom inicial
      style={{ height: "500px", width: "100%" }} // Ajusta el tamaño del mapa
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <HeatLayer data={coordenadas} />
    </MapContainer>
  );
};

export default Heatmap;
