import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Homepage/Hero'
import JustArrived from '../parts/Homepage/JustArrived'
import BrowseRoom from '../parts/Homepage/BrowseRoom'
import Clients from '../parts/Homepage/Clients'
import Sitemap from '../parts/Homepage/Sitemap'
import Footer from '../parts/Footer'

import useScrollAnchor from '../helpers/hooks/useScrollAnchor'
import useModalDOM from '../helpers/hooks/useModalDOM'

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute"/>
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}
