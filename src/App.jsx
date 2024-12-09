import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mycard from './Mycard'
import Header from './Header'
import Heatmap from "./Heatmap";
import { Mychart } from './Mychart'
import Layout from './app/Layout'


function App() {

  return (
    <>
      <Layout>

        <div className="container">
          <div className="row">
            <div className="col-4">
              <Mycard>
                <Mychart />
              </Mycard>

            </div>
            <div className="col-4">
              <Mycard>
                <Mychart />
              </Mycard>
            </div>
            <div className="col-4">
              <Mycard>
                <Mychart />
              </Mycard>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Mycard>
                <Heatmap />
              </Mycard>
            </div>
            <div className="col-6">
              <Mycard>
                <Mychart />
              </Mycard>
            </div>
          </div>

        </div>
      </Layout>

    </>
  )
}

export default App