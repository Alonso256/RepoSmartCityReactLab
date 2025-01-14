import { useState, useEffect } from 'react';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ChartContainer';
import Loader from '../../../Loader';

const chartConfig = {
  felicidad: {
    label: "Felicidad",
    color: "#2563eb",
  },
  tristeza: {
    label: "Tristeza",
    color: "#60a5fa",
  },
}

export function BarChart() {
  const [chartData, setChartData] = useState("");
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    setLoading(true); // Comienza la carga
    fetch("http://localhost:5000/felicidad_tristeza")
      .then((response) => response.json())
      .then((data) => {
        // Formatear el objeto directamente
        const formattedData = data.map((item) => ({
          distrito: item.barrio,
          felicidad: item.felicidad,
          tristeza: item.tristeza,
        }));
        setChartData(formattedData);
        setLoading(false); // Finaliza la carga
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Finaliza la carga incluso si hay un error
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Loader/>
      </div>
    );
  }

  return (
    <ChartContainer title="Estadísticas por Distrito">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="distrito"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Legend />
          <Bar 
          dataKey="felicidad" 
          fill={chartConfig.felicidad.color} 
          radius={4} 
          name={chartConfig.felicidad.label} />
          <Bar 
          dataKey="tristeza" 
          fill={chartConfig.tristeza.color}
            radius={4}
            name={chartConfig.tristeza.label} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}