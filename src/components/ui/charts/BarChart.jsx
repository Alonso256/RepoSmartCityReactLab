import { useState, useEffect } from 'react';
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from './ChartContainer';


export function BarChart() {

  return (
    <ChartContainer title="Estadísticas por Distrito">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart>
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
          <Bar dataKey="espanolesHombres" fill="#2563eb" radius={4} name="Hombres" />
          <Bar dataKey="espanolesMujeres" fill="#60a5fa" radius={4} name="Mujeres" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}