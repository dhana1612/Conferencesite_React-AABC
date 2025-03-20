import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'
import Home from '../Components/Home/Home'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>
        <Route path="/" element={<Home/>} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

