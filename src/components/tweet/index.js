import React, { memo } from 'react'
import styles from './index.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import Photo from '../photo'
import * as ICON from '../icons'
import IconButton from '../icon-button'
import {useEffect,useState} from 'react'

// var gelen=["HOŞGELDİNİZ", "ILK TWITINIZI ATABILIRSINIZ"]
var text=[]



function StructureTweet({name,mention,date,children,big}) {
    const [tampon,setTampon]=useState(true)
    const [newText,setNewText]=useState([])


    

     useEffect(()=> {
        var gelen=['HOŞGELDINIZ','NASILSINIZ?']
        gelen= JSON.parse(sessionStorage.getItem('TEXT'))
        gelen && gelen.forEach((e,i)=> {
        text[i]=e
       })
         setTimeout(setTampon(false),900)
        //  console.log('ILK:',gelen);
        //  gelen=[...gelen, JSON.parse(sessionStorage.getItem('TEXT'))]
        //  console.log('GELEN:',gelen);
        //  gelen.forEach((e,i)=>  text[i]=e)
         
      },[])
    return  (!tampon &&text.reverse().map((tweet,index)=> {
        
        var like=Math.floor(Math.random()*20)
        var comment=Math.floor(Math.random()*20)
        var rt=Math.floor(Math.random()*20)
    
        const untilNow = formatDistanceToNowStrict(date)
        return (
            <article className={styles.article} key={index}>
            <div className={styles.photoDiv} >
                <Photo big/>
            </div>

            {/* BAŞLA */}
            <div className={styles.body} >
                <header className={styles.header}>
                    <span className={styles.name}>{name}</span>  <span >@{mention} </span> • <span className={styles.date}>{untilNow}</span> </header>
                <p className={styles.content}>{tweet}</p>
                <footer className={styles.footer}> 
                <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Reply/>
                        <span>{comment}</span>
                    </IconButton>
                    </div>
                    
                    <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Retweet/>
                        <span>{rt}</span>
                    </IconButton>
                    </div>

                    <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Like/>
                        <span>{like}</span>
                    </IconButton>
                    </div>
                    
                    <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Share/>
                    </IconButton>
                    </div>
                
                </footer>
            </div>

            {/* BİTİR */}

        </article>

             )
        }
        
        
        ) )
}

export default StructureTweet




