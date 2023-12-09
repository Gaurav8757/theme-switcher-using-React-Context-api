
import { useEffect, useState } from 'react';
import './App.css'
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './componets/ThemeBtn.JSX';
import Card from './componets/Card';
function App() {
  const [themeMode, setThemeMode] = useState("light");

  // make function on theme
  const lightTheme = ()=>{
    setThemeMode('light');
  }
  const darkTheme = ()=>{
    setThemeMode('dark');
  }
// actual changes in theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode]
)

  return (
<ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
{/* themeBtn */}
<ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
<Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
