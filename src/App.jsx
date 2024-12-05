import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CardBolt } from './CardBolt';
import { ChartGridBolt } from './ChartGridBolt';
import { ChartRowBolt } from './ChartRowBolt';
import Heatmap from "./Heatmap";
import { BarChart } from './components/ui/charts/BarChart';
import { AreaChart } from './components/ui/charts/AreaChart';


const heatData = [
  [40.712776, -74.005974, 1], // Lat, Long, Intensidad
  [40.713776, -74.002974, 0.2],
  [40.711776, -74.007974, 0.4],
  [40.715776, -74.001974, 0.8]
];

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <ChartGridBolt>
        <ChartRowBolt columns={3}>
          <CardBolt>
            <AreaChart />
          </CardBolt>
          <CardBolt>
            <BarChart />
          </CardBolt>
          <CardBolt>
            <BarChart />
          </CardBolt>
        </ChartRowBolt>
        
        <ChartRowBolt columns={2}>
          <CardBolt>
            <BarChart />
          </CardBolt>
          <CardBolt>
            <BarChart />
          </CardBolt>
        </ChartRowBolt>
      </ChartGridBolt>
    </div>

    </>
  )
}

export default App
