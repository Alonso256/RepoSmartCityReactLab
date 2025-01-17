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
import { MapaContenedores } from './components/ui/charts/MapaContenedores';
import { DispersionEstres } from './components/ui/charts/DispersionEstres';
import { DispersionAnsiedad } from './components/ui/charts/DispersionAnsiedad';
import { LineChart } from './components/ui/charts/LineChart';
import { HoverCard, HoverCardContent, HoverCardTrigger,} from "@/components/ui/hover-card"

function App() {

  return (
    <>
      <Layout>
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
          <ChartGridBolt>
            <ChartRowBolt columns={2}>
              <CardBolt>
                <HoverCard>
                  <HoverCardTrigger className="flex justify-center">Tema</HoverCardTrigger>
                  <HoverCardContent className="text-center">
                  Hemos diseñado un dashboard temático basado en emociones para explorar su relación con los datos, facilitando una interpretación más humana y empática mediante colores, gráficos y métricas asociados a cada emoción.
                  </HoverCardContent>
                </HoverCard>
              </CardBolt>
              <CardBolt>
                <HoverCard>
                  <HoverCardTrigger className="flex justify-center">Autores</HoverCardTrigger>
                  <HoverCardContent className="text-center">
                    Alonso Cascajero López y Sara Jiménez Redondo, alumnos de 4º de Ingeniería Informática en la Universidad de Castilla-La Mancha.
                  </HoverCardContent>
                </HoverCard>
              </CardBolt>
            </ChartRowBolt>

            <ChartRowBolt columns={3}>
              <CardBolt>
                <BarChart />
              </CardBolt>
              <CardBolt>
<DispersionAnsiedad />
              </CardBolt>
              <CardBolt>
                <LineChart />
              </CardBolt>
            </ChartRowBolt>

            <ChartRowBolt columns={2}>
              <CardBolt className="card-bolt">
                <MapaContenedores />
              </CardBolt>
              <CardBolt>
                <DispersionEstres />
              </CardBolt>
            </ChartRowBolt>
          </ChartGridBolt>
        </div>
      </Layout>
    </>
  )
}

export default App
