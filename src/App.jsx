import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CardBolt } from './CardBolt';
import { ChartGridBolt } from './ChartGridBolt';
import { ChartRowBolt } from './ChartRowBolt';
import { BarChart } from './components/ui/charts/BarChart';
import { AreaChart } from './components/ui/charts/AreaChart';
import { Layout } from './app/Layout';


function App() {

  return (
    <>
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <ChartGridBolt>
        <ChartRowBolt columns={3}>
          <CardBolt>
          
          </CardBolt>
          <CardBolt>
            
          </CardBolt>
          <CardBolt>
            
          </CardBolt>
        </ChartRowBolt>
        
        <ChartRowBolt columns={2}>
          <CardBolt>
            
          </CardBolt>
          <CardBolt>
          <BarChart />
          </CardBolt>
        </ChartRowBolt>
      </ChartGridBolt>
    </div>
    </Layout>
    </>
  )
}

export default App
