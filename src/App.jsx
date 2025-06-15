import React from 'react'
import Hero from './pages/Hero'
import Nav from './components/Navbar/Nav'
import Showcase from './pages/Showcase'
import AddonsSection from './pages/AddonsSection'
import Footer from './pages/Footer'

const App = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Showcase grid={2}/>
      <AddonsSection />
      <Showcase grid={3}/>
      <Footer />
    </main>
  )
}

export default App
