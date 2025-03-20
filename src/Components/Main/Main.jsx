import React from 'react'
import Header from '../../Core/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Core/Footer/Footer'

export default function Main() {
  return (
   <>
    <Header />
    
    <main>
        <Outlet></Outlet>
    </main>
    <Footer/>
   </>
  )
}
