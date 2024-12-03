import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mycard from './Mycard'
import Header from './Header'
import Heatmap from "./Heatmap";
import { Mychart } from './Mychart'



const heatData = [
  [40.712776, -74.005974, 1], // Lat, Long, Intensidad
  [40.713776, -74.002974, 0.2],
  [40.711776, -74.007974, 0.4],
  [40.715776, -74.001974, 0.8]
];

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Mycard>
              <Mychart/>
            </Mycard>

          </div>
          <div className="col-4">
            <Mycard>
            <Mychart/>
            </Mycard>
          </div>
          <div className="col-4">
            <Mycard>
            <Mychart/>
            </Mycard>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Mycard>
              <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />

                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </Mycard>
          </div>
          <div className="col-6">
            <Mycard>
            <Mychart/>
            </Mycard>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
