import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'
import Home from '../Components/Home/Home'
import FullCommittee from '../Components/Pages/FullCommittee'
import WelcomeMessage from '../Components/Pages/WelcomeMessage'

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Main/>}>
         <Route path ="/" element={<Home/>} />
         <Route path ="/welcome-message" element={<WelcomeMessage/>} />
         <Route path ="/full-committee" element={<FullCommittee/>} />
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

