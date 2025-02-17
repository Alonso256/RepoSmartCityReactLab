"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"
import { useState } from "react"
import { useEffect } from "react"


const chartConfig = {
  espanolesHombres: {
    label: "espanolesHombres",
    color: "#2563eb",
  },
  espanolesMujeres: {
    label: "espanolesMujeres",
    color: "#60a5fa",
  },
}

export function Mychart() {
  const [chartData, setChartData] = useState([]);
  const [offset, setOffset] = useState(0); // Offset inicial
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await fetch("http://localhost:5000/censos/estadisticas?limit=100");

        //const response = await fetch("http://localhost:5000/censos/?limit=500");
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
                existing.espanolesHombres = item.espanolesHombres;
                existing.espanolesMujeres = item.espanolesMujeres;
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
  }, []);
  return (
      <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
      <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="distrito"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="espanolesHombres" fill="#2563eb" radius={4} name="Hombres" />
          <Bar dataKey="espanolesMujeres" fill="#60a5fa" radius={4} name="Mujeres" /> 
          </RechartsBarChart>
          </ResponsiveContainer>
      </ChartContainer>
  
  )
}
