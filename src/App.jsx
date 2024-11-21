import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mybutton from './Mybutton'
import Layout from './app/Layout'
import Mycard from './Mycard'
import Card from './MenuCard'
import CardGrid from './CardGrid'
import Switch from './BtnSwitch'
import Button from './Btn'
import Tooltip from './User'
import Loader from './Loader'
import ButtonRound from './BtnRound'
import Input from './Input'
import Form from './Form'
import StyledCard from './StyledCard'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { ChartContainer } from "@/components/ui/chart"
import Header from './Header'

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
}
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

function App() {

  return (
    <>
      <Header/>
      <div className="container text-center">
        <div className="row">
          <div className="col">

            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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
          </div>
          <div className="col">
            <StyledCard />
          </div>
          <div className="col">
            <StyledCard />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <StyledCard />
          </div>
          <div className="col">
            <StyledCard />
          </div>
        </div>

      </div>

    </>
  )
}

export default App
