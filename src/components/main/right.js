import React from 'react'
import styles from './right.module.css'
import cn from 'classnames'
import Theme from '../theme/theme'


function Right({children}) {

    
    return (
        <div className={styles.right}> 
        {children}
        <h1 className={styles.heading}>Choose Your Theme</h1>
        <Theme/>
        </div>
    )
}


export default Right
