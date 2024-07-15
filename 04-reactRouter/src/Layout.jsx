import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//Outlet dynamically changes the content, wherever we place it while rendering.
//If we place in middle, the top & bottom parts will remains same, and so on & so forth.


function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
