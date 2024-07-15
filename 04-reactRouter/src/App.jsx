import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, NavLink} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  //this method of rendering won't work as RouterProvider will be needed along with createBrowser Router
  /*return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )*/

  //no need to render here
  return (
    <>
    </>
  )
}

export default App