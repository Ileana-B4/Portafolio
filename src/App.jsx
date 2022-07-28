import React from 'react'
import Header from './components/header/header'
import Navbar from './components/navbar/navbar'
import About from './components/about/about' 
import Services from './components/services/services'
import Experience from './components/Experience/Experience'
import Contact from './components/contact/contact' 
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App