import React, {useState} from 'react'
import styles from './modal-tweet.module.css'

import Photo from '../photo'
import IconButton from '../icon-button'
import {Close} from '../icons'
import ThemeButton from '../theme-button'
var layout= []
var yeni=["HOŞGELDİNİZ"]


function ModalTweet({onClick= () => {}}) {
    const [idea,setIdea]=useState([])
    
    
    const onSubmit= (e) => {
        var yesyeni=[]
        yesyeni= JSON.parse(sessionStorage.getItem('TEXT'))
      yesyeni && yesyeni.forEach((e,i)=> {
        layout[i]=e
       })
        e.preventDefault()
        layout.push( idea)
        sessionStorage.setItem('TEXT',JSON.stringify(layout))
        onClick(false)
        window.location.reload()
        
    }
   
    
    return (
        <div className={styles.overlay}> 
            <div className={styles.modal}>
                {/* Header */}
                <div className={styles.header}>
                    <IconButton >
                        <Close className={styles.close} onClick={onClick}/>
                    </IconButton>

                </div>
                {/* Content */}
                <div className={styles.content}>

                <div className={styles.photo}>
                <Photo big/>
                </div>

                
                <textarea placeholder="What's happening ..?" rows="4" className={styles.text} value={idea} onChange={(e)=>{setIdea(e.target.value)}}/>
                

                </div>
                {/* Footer */}
                <div className={styles.footer}>
                    <ThemeButton className={styles.twit} onClick={onSubmit}/>
                </div>


            </div>
        </div>
    )
}


export default ModalTweet
