import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { useState, useEffect } from 'react';



const chartSetting = {
  yAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
  width: 500,
  height: 300,
};

export function DispersionEstres() {
  const [dataset, setDataset] = useState([]);
  const [colorMap, setColorMap] = useState({}); // Mapa de colores para los distritos


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/estres?limit=50");
        const data = await response.json();

         // Generar colores dinámicamente para cada distrito
         const newColorMap = {};
         data.forEach((item) => {
           if (!newColorMap[item.distrito]) {
             newColorMap[item.distrito] = generateColor(); // Asignar un color único
           }
         });
 
         // Actualizar el mapa de colores y el dataset con colores asignados
         setColorMap(newColorMap);
         setDataset(
          data.map((item, index) => ({
            version: `data-${index}`,
            x: item.x, // Asegúrate de que `x` esté en los datos del servidor
            y: item.y, // Asegúrate de que `y` esté en los datos del servidor
            color: newColorMap[item.distrito], // Asignar color dinámico por distrito
          }))
        );
       } catch (error) {
         console.error("Error fetching scatter data:", error);
       }
     }
     fetchData();
  }, []);

   // Función para generar un color aleatorio en formato hexadecimal
   const generateColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  const series = Object.keys(colorMap).map((distrito) => ({
    label: distrito,
    color: colorMap[distrito], // Color asignado al distrito
    datasetKeys: { id: "version", x: "x", y: "y" },
    filter: (point) => point.distrito === distrito, // Mostrar solo los puntos del distrito correspondiente
  }));
  return (
    <ScatterChart
      dataset={dataset}
      series={series}
          yAxis={[
        {
          label: "Ocupación (%)"
        },
      ]}
      xAxis={[
        {
          label: "Vehículos por día (media)",
        },
      ]}
      width={500}
      height={300}
    />
  );
}



