import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
