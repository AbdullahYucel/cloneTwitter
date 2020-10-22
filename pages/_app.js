import React, { useState,useEffect,useLayoutEffect } from 'react'
import '../styles/app.css'
import StoreContext from './store'

export default function MyApp({ Component, pageProps }) {
  const [theme,setTheme]= useState('light')

  useEffect(()=> {
    const colorDesign=localStorage.getItem('THEME') || 'dark' 
    setTheme(colorDesign)
  })

  const changeTheme= (theme)=> {
    setTheme(theme)
    localStorage.setItem('THEME',theme)
  }

  useEffect(()=> {
    const now=document.querySelector('html')

    now.classList.remove('light')
    now.classList.remove('dark')
    now.classList.remove('dim')
    const low= theme.toLowerCase()
    now.classList.add(low)
  },[theme])

  return (
    <StoreContext.Provider value={{theme,changeTheme}}>
      <Component {...pageProps} />
    </StoreContext.Provider> 
  )
}