import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { useState, useEffect } from 'react';


export function DispersionAnsiedad() {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/ansiedad_confianza?limit=50");
        const data = await response.json();    
         setDataset(data);
       } catch (error) {
         console.error("Error fetching scatter data:", error);
       }
     }
     fetchData();
  }, []);

   
  
  return (
    <ScatterChart
            dataset={dataset}
            series={[
                {
                    datasetKeys: { id: "id", x: "x", y: "y", color: "color" },
                    label: "Ansiedad vs. Confianza",
                    showTooltip: true,
                    tooltipRenderer: (point) => `${point.label}`,
                },
            ]}
            yAxis={[{ label: "Confianza (Tasa de Uso)" }]}
            xAxis={[{ label: "Ansiedad (Disponibilidad Bicicletas)" }]}
            width={500}
            height={300}
        />
  );
}



