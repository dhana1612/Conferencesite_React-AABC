import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../Components/Main/Main'
import Home from '../Components/Home/Home'
import FullCommittee from '../Components/Pages/FullCommittee'
import WelcomeMessage from '../Components/Pages/WelcomeMessage'
import PaperSubmission from '../Components/Pages/PaperSubmission'
import ScrollToTop from '../Scrolltotop'
import Contact from '../Components/Pages/Conrtact'

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="/paper-submit" element={<PaperSubmission />} />
            <Route path="/welcome-message" element={<WelcomeMessage />} />
            <Route path="/full-committee" element={<FullCommittee />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>

  )
}

