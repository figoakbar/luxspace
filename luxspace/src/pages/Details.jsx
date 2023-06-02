import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'
import Clients from '../parts/Homepage/Clients'
import Sitemap from '../parts/Homepage/Sitemap'
import Footer from '../parts/Footer'

export default function Details() {
  return (
    <>
      <Header />

      <Breadcrumb list={[
        { url:"/", name: "Home" },
        { url:"/categories/91231", name: "Office Room" },
        { url:"/categories/91231/products/7888", name: "Office Room" },
      ]} />

      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}
