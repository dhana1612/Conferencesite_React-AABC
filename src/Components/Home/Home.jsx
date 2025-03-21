import React from 'react'
import OrganizingCommittee from './OrganizeCommittee'
import HeroSection from '../Home/HeroSection'
import Contact from './Contact'
import KeyDates from './KeyDates'
// import Speakers from './Speaker'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <KeyDates />
      {/* <Speakers/> */}
      <OrganizingCommittee />
      <Contact />
    </div>
  )
}
