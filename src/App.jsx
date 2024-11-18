import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './Mybutton'
import Layout from './app/Layout'
import Mycard from './Mycard'
import { Mychart } from './Mychart'

function App() {

  return (
    <>
       <Mybutton/>
      <Mychart/>
    </>
  )
}

export default App
