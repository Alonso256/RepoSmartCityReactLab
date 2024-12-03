import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.heat";

const Heatmap = ({ data }) => {
  // Custom hook para agregar el heatmap
  const HeatLayer = () => {
    const map = useMap();

    React.useEffect(() => {
      if (!data || data.length === 0) return;

      // Crear la capa de calor
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
      center={[40.7128, -74.006]} // Coordenadas iniciales
      zoom={13} // Nivel de zoom inicial
      style={{ height: "200px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <HeatLayer />
    </MapContainer>
  );
};

export default Heatmap;
