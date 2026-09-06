import Navbar from './Navigation/Nav.tsx'
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
      </div>
    </>
  )
}

export default App
