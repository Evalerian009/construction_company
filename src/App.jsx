import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Projects from './components/Projects'

function App() {
  return (
    <div className='mx-auto overflow-x-hidden'>
      <Hero />
      <About />
      <Projects />
      <Offers />
      <Footer />
    </div>
  )
}

export default App
