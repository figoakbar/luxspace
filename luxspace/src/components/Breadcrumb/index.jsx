import React from 'react'
import propTypes  from 'prop-types'

export default function Breadcrumb() {
  return (
    <section class="bg-gray-100 py-8 px-4">
      <div class="container mx-auto">
        <ul class="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">Office Room</a>
          </li>
          <li>
            <a href="#" aria-label="current-page">Details</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

Breadcrumb.propTypes = {
    list: propTypes.array.isRequired,
}