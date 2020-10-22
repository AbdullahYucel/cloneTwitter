import React, { useState,useEffect,useLayoutEffect } from 'react'
import '../styles/app.css'
import StoreContext from './store'

export default function MyApp({ Component, pageProps }) {
  

  return (
    <StoreContext.Provider value={{theme,changeTheme}}>
      <Component {...pageProps} />
    </StoreContext.Provider> 
  )
}