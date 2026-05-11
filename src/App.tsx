import { useEffect } from 'react'
import { initScroll } from './lib/scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hours from './components/Hours'
import Hashtag from './components/Hashtag'
import PhotoGrid from './components/PhotoGrid'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    initScroll()
  }, [])

  return (
    <div className="min-h-screen bg-[oklch(0.11_0.01_22)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Hours />
        <Hashtag />
        <PhotoGrid />
      </main>
      <Footer />
    </div>
  )
}
