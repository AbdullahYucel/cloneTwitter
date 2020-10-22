import React from 'react'
import styles from './theme.module.css'
import {useState,  useEffect} from 'react'


function Theme() {


    // **********************************************************
    // **********************************************************
  const [theme,setTheme]= useState('dark')

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
    
    // **********************************************************
    // **********************************************************
    
    return (
        
        <div className={styles.div}>
               {
                   ['Light','Dim','Dark'].map((gelen)=> {
                       return <label key={gelen} className={styles.label}>
                       <input 
                       type="radio" 
                       name="theme" 
                       value={gelen}
                       checked={gelen===theme}
                       onChange={(e)=> changeTheme(e.target.value)}

                       />
                        {gelen}
                       </label>
                   })
               } 
        </div>
    )
}


export default Theme