import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>

        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}
