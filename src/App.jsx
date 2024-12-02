import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Mycard from './Mycard'
import Header from './Header'
import { Mychart } from './Mychart'



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
            <Mychart/>
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
