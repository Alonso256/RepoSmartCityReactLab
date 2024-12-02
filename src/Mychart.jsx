"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"
import { useState } from "react"
import { useEffect } from "react"


const chartConfig = {
  espanoles: {
    label: "espanoles",
    color: "#2563eb",
  },
  espanolas: {
    label: "espanolas",
    color: "#60a5fa",
  },
}

export function Mychart() {
  const [chartData, setChartData] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/censos/67361d7c165d53aac95fe975") // Reemplaza "http://xxx" con la URL de tu API
      .then((response) => response.json())
      .then((data) => {
        // Formatear el objeto directamente
        const formattedItem = {
          distrito: data.DESC_DISTRITO, // Accede directamente a las propiedades
          espanoles: data.EspanolesHombres,
          espanolas: data.EspanolesMujeres,
        };
  
        // Pasar el objeto formateado como un array para el BarChart
        setChartData([formattedItem]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="distrito"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />

          <Bar dataKey="espanoles" fill="var(--color-espanoles)" radius={4} />
          <Bar dataKey="espanolas" fill="var(--color-espanolas)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
