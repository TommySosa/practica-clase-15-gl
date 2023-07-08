import { useState } from 'react'
import './App.css'
import { Calculator } from './components/Calculator'
import themeContext from './context/themeContext'
import SelectTheme from './components/SelectTheme'
import ShowJokes from './components/ShowJokes'

function App() {
  const [theme, setTheme] = useState('dark')
  const [showJokes, setShowJokes] = useState(false)

  const handleShowJokes = () => {
    setShowJokes(() => true)
  }

  return (
    <themeContext.Provider value={{
      theme,
      setTheme
    }}>
      <div className={theme}>
        <SelectTheme />
        <Calculator />
        <button onClick={handleShowJokes}>Generar chistes</button>
        {showJokes ? <ShowJokes /> : null}
      </div>
    </themeContext.Provider>
  )
}

export default App
