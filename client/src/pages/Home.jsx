import React from 'react'
import { Annoucement } from '../components/Annoucement'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Slider'

export default function Home() {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
    </div>
  )
}
