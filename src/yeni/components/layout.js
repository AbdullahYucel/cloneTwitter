import React from 'react'
import useWindowSize from '../components/hooks/use-window-size'
import styles from './layout.module.css'


import Left from '../components/main/left'
import Center from '../components/main/center'
import Right from '../components/main/right'

function Layout({children}) {
    const size =useWindowSize()
    
    return (
        <div className={styles.layout}> 
        <Left flat={size.width <980}></Left>
        <Center>{children}</Center>
        { size.width >980 && <Right></Right>}

        
        </div>
    )
}


export default Layout
