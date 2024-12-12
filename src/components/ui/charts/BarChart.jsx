import { useState, useEffect } from 'react';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ChartContainer';

export const chartData = [
  { distrito: "January", EspanolesHombres: 186, EspanolesMujeres: 80 },
  { distrito: "February", EspanolesHombres: 305, EspanolesMujeres: 200 },
  { distrito: "March", EspanolesHombres: 237, EspanolesMujeres: 120 },
  { distrito: "April", EspanolesHombres: 73, EspanolesMujeres: 190 },
  { distrito: "May", EspanolesHombres: 209, EspanolesMujeres: 130 },
  { distrito: "June", EspanolesHombres: 214, EspanolesMujeres: 140 },
];

export function BarChart() {

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
          <Bar dataKey="EspanolesHombres" fill="#2563eb" radius={4} name="Hombres" />
          <Bar dataKey="EspanolesMujeres" fill="#60a5fa" radius={4} name="Mujeres" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}