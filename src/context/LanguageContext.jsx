import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang) => {}
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
