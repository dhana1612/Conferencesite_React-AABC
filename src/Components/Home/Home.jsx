import React from 'react'
import OrganizingCommittee from './OrganizeCommittee'
import HeroSection from '../Home/HeroSection'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <OrganizingCommittee />
      <Contact />
    </div>
  )
}
