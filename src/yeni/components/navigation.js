import React from 'react'
import styles from './navigation.module.css'
import NavButton from './nav-button'
import {MENU} from '../components/DATA/MENU'
import Bookmarks from '../pages/Bookmarks'



function Navigation({flat=false,children,text,icon,selectedKey='Home'}) {
    
    const setClick=(e)=> {
        var now=e.target.innerText
        localStorage.setItem('CLICK',now);
         window.location.reload()

         if(now!== 'Home' && now!== undefined)
         {alert( `${now} Page is make in progress`)}
    }
    
    var clicked= localStorage.getItem('CLICK')
     
     
    
    return (
        <nav className={styles.nav}>
            
            {
                MENU.map((item)=> {
                    const showTitle= !flat && item.text.length >0
                    const selected= clicked ===item.text
                    return (
                    <NavButton 
                    key={item.key} 
                    notify={item.notify} 
                    selected={selected}
                    onClick={setClick}
                    
                    >
                    {selected ? item.selected : item.logo}
                    {showTitle && <p className={selected ? styles.select: styles.normal }>{item.text}</p>}
                    </NavButton>)
                    
                })
            }
            
        </nav>
    )
}


export default Navigation
