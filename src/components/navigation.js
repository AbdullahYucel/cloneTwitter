import React from 'react'
import styles from './navigation.module.css'
import NavButton from './nav-button'
import * as ICON from '../components/icons'
import {MENU} from '../components/DATA/MENU'
import {useRouter} from 'next/router'
import cn from 'classnames'



function Navigation({flat=false,children,text,icon,selectedKey='Home'}) {
    const router= useRouter()
    
    return (
        <nav className={styles.nav}>
            
            {
                MENU.map((item)=> {
                    const showTitle= !flat && item.text.length >0
                    const selected= router.pathname===item.path
                    return (
                    <NavButton 
                    key={item.key} 
                    notify={item.notify} 
                    selected={selected}
                    href={item.path}
                    
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
