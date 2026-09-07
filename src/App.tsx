import { Routes, Route } from "react-router-dom"
import Navbar from './Navigation/Nav.tsx'
import Home from './HomePage/Home.tsx'
import Blog from './BlogPage/Blog.tsx'
import About from './AboutPage/About.tsx'
import Newsletter from './NewsletterPage/Newsletter.tsx'

import {useState} from 'react'
import './App.css'

function App() {

  const [isDark, setDark] = useState<boolean>(false)
  
  function toggleTheme() { 
    setDark(!isDark)

  } 
  return (
    <>
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Navbar 
      toggleTheme = {toggleTheme}
      isDark = {isDark}/>
      <Routes>
        <Route path="/" element = {< Home />}></Route>
        <Route path="/blog" element = {< Blog />}></Route>
        <Route path="/about" element = {< About />}></Route>
        <Route path="/newsletter" element = {< Newsletter />}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
