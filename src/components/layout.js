import React from 'react'
import useWindowSize from '../components/hooks/use-window-size'
import styles from './layout.module.css'
import cn from 'classnames'


import Left from '../components/main/left'
import Center from '../components/main/center'
import Right from '../components/main/right'
import StructureTweet from '../components/tweet/index'

function Layout({children}) {
    const size =useWindowSize()
    const dateTime=new Date(2020,9,19)
    
    return (
        <div className={styles.layout}> 
        <Left flat={size.width <980}></Left>
        <Center>{children}</Center>
        { size.width >980 && <Right></Right>}

        
        </div>
    )
}


export default Layout
