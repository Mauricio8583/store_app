import React from 'react'
import { Annoucement } from '../components/Annoucement'
import { Categories } from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Newsletter } from '../components/Newsletter'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter /> 
    </div>
  )
}
