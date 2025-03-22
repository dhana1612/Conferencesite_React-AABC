import React from 'react'
import OrganizingCommittee from './OrganizeCommittee'
import HeroSection from '../Home/HeroSection'
import Contact from './Contact'
import KeyDates from './KeyDates'
import About from './Aboutus'

export default function Home() {
  
  return (
    <div>
      <HeroSection/>
      <About />
      <KeyDates />
      <OrganizingCommittee />
      <Contact />
    </div>
  )
}
