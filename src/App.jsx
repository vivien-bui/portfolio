import Header from './components/Header'
import Hero from './components/Hero'
import CaseStudies from './components/CaseStudies'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main id="main">
        <Hero />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
