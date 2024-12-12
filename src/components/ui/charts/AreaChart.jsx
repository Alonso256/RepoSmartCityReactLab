import { AreaChart as RechartsAreaChart, Area, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ChartContainer';
import { useState } from "react"
import { useEffect } from "react"


const chartConfig = {
  EspanolesHombres: {
    label: "EspanolesHombres",
    color: "#2563eb",
  },
  EspanolesMujeres: {
    label: "EspanolesMujeres",
    color: "#60a5fa",
  },
}
export const chartData = [
  { distrito: "January", EspanolesHombres: 186, EspanolesMujeres: 80 },
  { distrito: "February", EspanolesHombres: 305, EspanolesMujeres: 200 },
  { distrito: "March", EspanolesHombres: 237, EspanolesMujeres: 120 },
  { distrito: "April", EspanolesHombres: 73, EspanolesMujeres: 190 },
  { distrito: "May", EspanolesHombres: 209, EspanolesMujeres: 130 },
  { distrito: "June", EspanolesHombres: 214, EspanolesMujeres: 140 },
];

export function AreaChart() {
 /* const [chartData, setChartData] = useState([]);
  const [offset, setOffset] = useState(0); // Offset inicial
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  useEffect(() => {
    const fetchStream = async () => {
      try {
        //const response = await fetch("http://localhost:5000/censos/estadisticas?limit=100");

        //const response = await fetch("http://localhost:5000/censos/?limit=50");
        //const response = await fetch("http://localhost:5000/censos");
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // Procesar líneas completas en el buffer
          const lines = buffer.split("\n");
          buffer = lines.pop(); // Mantener la línea incompleta en el buffer

          const newData = lines
            .filter((line) => line.trim()) // Ignorar líneas vacías
            .flatMap((line) => JSON.parse(line)); // Parsear y combinar datos

          // Actualizar los datos de la gráfica
          setChartData((prevData) => {
            const mergedData = [...prevData];

            newData.forEach((item) => {
              const existing = mergedData.find((d) => d.distrito === item.distrito);
              if (existing) {
                existing.EspanolesHombres = item.EspanolesHombres;
                existing.EspanolesMujeres = item.EspanolesMujeres;
              } else {
                mergedData.push(item);
              }
            });

            return mergedData;
          });
        }
      } catch (error) {
        console.error("Error al procesar el stream:", error);
      }
    };

    fetchStream();
  }, []);*/

  return (
    <ChartContainer config={chartConfig} title="Device Usage Trends">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
         data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="distrito"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="EspanolesHombres"
            stackId="1"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.4}
            name="EspanolesHombres"
          />
          <Area
            type="monotone"
            dataKey="EspanolesMujeres"
            stackId="1"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.4}
            name="EspanolesMujeres"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}