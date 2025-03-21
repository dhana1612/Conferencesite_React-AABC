import React from 'react'
import OrganizingCommittee from './OrganizeCommittee'
import HeroSection from '../Home/HeroSection'
import Contact from './Contact'
import KeyDates from './KeyDates'

export default function Home() {
  
  return (
    <div>
      <HeroSection/>
      <KeyDates />
      <OrganizingCommittee />
      <Contact />
    </div>
  )
}
