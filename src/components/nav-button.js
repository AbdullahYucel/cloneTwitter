import React from 'react'
import styles from './nav-button.module.css'
import Button from './button'
import cn from "classnames"


function NavButton({notify, selected,children,...props}) {

    
    return (
        
            <Button className={cn(styles.navButton, selected && styles.NavButtonSelected)} {...props} >
            {notify>0 && <span className={styles.notify}>{notify}</span>}
            {children}
            </Button>
        
    )
}


export default NavButton
