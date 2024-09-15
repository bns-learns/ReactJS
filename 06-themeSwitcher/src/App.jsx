import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  // in the theme.jsx, lightTheme was just an empty method with no functionality defined.
  // in such cases, you can write the functionality here with the same name.
  // the functionality will get transferred to the same methods automatically.
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => {
    setThemeMode("dark");
  }
  // the above written code will only change the values, however this won't get injected into the HTML.

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (

    // here, 'value' are the values that will be passed to the components within ThemeProvider
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
