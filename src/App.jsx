import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [selectedCase, setSelectedCase] = useState(null)

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CaseStudies onSelectCase={setSelectedCase} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
