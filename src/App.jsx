import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Nav />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App
