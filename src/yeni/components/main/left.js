import React from 'react'
import styles from './left.module.css'
import Navigation from '../navigation'
import ThemeButton from '../theme-button'
import ProfileMenu from '../profile-menu'
import ModalTweet from '../modal-tweet/modal-tweet'

import {useState} from 'react'


function Left({flat}) {
    const [open,setOpen]=useState(false)

    
    return (
        <div className={styles.left}> 
        <Navigation flat={flat}/>
        <ThemeButton flat={flat} full={!flat} onClick={(()=>{setOpen(true) })}>Tweet</ThemeButton>

        {/* Tweet Pop-up */}
        {open && <ModalTweet onClick={()=> {setOpen(false)}}/>}

        <ProfileMenu/>
        </div>
    )
}


export default Left
