import React from 'react'
import styles from './icon-button.module.css'
import cn from 'classnames'
import Button from './button'



function IconButton({children, className,...props}) {
    
    return (
        
            <Button  
            className={cn(styles.iconButton, className)} 
            {...props}>
            {children}
            </Button>
        
    )
}


export default IconButton
