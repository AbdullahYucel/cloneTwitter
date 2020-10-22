import React from 'react'
import styles from './center.module.css'
import cn from 'classnames'


function Center({children}) {

    
    return (
        <div className={styles.center}> 
        {children}
        </div>
    )
}


export default Center
