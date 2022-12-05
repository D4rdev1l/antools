import React from 'react'
import './App.scss'

import { Navbar, Brand, Cta } from './components'
import { Hero, Tools, Newcomer, Testimonials, Footer } from './containers'

const App = () => {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Tools />
        <Brand />
        <Newcomer />
        <Testimonials />
        <Cta />
        <Footer />
    </div>
  )
}

export default App