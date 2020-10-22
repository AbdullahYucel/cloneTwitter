import React from 'react'
import styles from './theme.module.css'
import {useState, useContext} from 'react'
import StoreContext from '../../pages/store'


function Theme() {
    // const [selectedTheme,setSelectedTheme]=useState('Light')
    const store= useContext(StoreContext)
    
    return (
        <div className={styles.div}>
               {
                   ['Light','Dim','Dark'].map((theme)=> {
                       return <label key={theme} className={styles.label}>
                       <input 
                       type="radio" 
                       name="theme" 
                       value={theme}
                       checked={theme===store.theme}
                       onChange={(e)=> store.changeTheme(e.target.value)}

                       />
                        {theme}
                       </label>
                   })
               } 
        </div>
    )
}


export default Theme