import { useState, useEffect, useMemo } from 'react';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ChartContainer';
import Loader from '../../../Loader';
import ButtonFilter from '@/components/ButtonFilter';

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
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [filter, setFilter] = useState("todos"); // Estado para controlar la vista


  useEffect(() => {
    setLoading(true); // Comienza la carga
    fetch("http://localhost:5000/felicidad_tristeza")
      .then((response) => response.json())
      .then((data) => {
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

  // Filtrar los datos según la vista actual
  const filteredData = useMemo(() => {
    return chartData.filter((item) => {
      if (filter === "felices") return item.felicidad > item.tristeza; // Umbral para barrios felices
      if (filter === "tristes") return item.tristeza > item.felicidad; // Umbral para barrios tristes
      return true; // Mostrar todos
    });
  }, [chartData, filter]);

  if (loading) {
    return (
      <div className="loading-container">
        <Loader />
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="filter-buttons">
        <ButtonFilter setFilter={setFilter} />
      </div>
      <ChartContainer title="FELICIDAD / TRISTEZA 🌈😢">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={filteredData}>
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
    </div>
  );
}