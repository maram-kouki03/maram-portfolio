import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'dark', toggle: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  // Dark-first brand: default to dark, only switch if the visitor chose before.
  useEffect(() => {
    const stored = window.localStorage?.getItem('theme')
    if (stored === 'light' || stored === 'dark') setTheme(stored)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage?.setItem('theme', theme)
    } catch {
      /* storage may be unavailable — fine, theme still works for the session */
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
