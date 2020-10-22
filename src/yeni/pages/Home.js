import React from 'react'

import Layout from '../components/layout'
import StructureTweet from '../components/tweet/index'
import styles from './index.module.css'



import Photo from '../components/photo'
import * as ICON from '../components/icons'
import IconButton from '../components/icon-button'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import Base from '../components/modal-tweet/base'

function Index() {
    const date= new Date(2020,9,21)
    const name='Username'
    const mention='Mention'
    const untilNow = formatDistanceToNowStrict(date)

    
    return (
        <Layout>
        <div className={styles.base}><Base/></div>
            

            <div className={styles.deneme}>
            <StructureTweet name={name} mention={mention} date={date} big /> 

                
            </div>
            <article className={styles.article} >
            <div className={styles.photoDiv} >
                <Photo big/>
            </div>

                {/* BAŞLA */}
                <div className={styles.body} >
                <header className={styles.header}>
                    <span className={styles.name}>{name}</span>  <span>@{mention} </span> • <span className={styles.date}>{untilNow}</span> </header>
                <p className={styles.content}>Hi! Let's start tweeting...</p>
                <footer className={styles.footer}> 
                <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Reply/>
                        <span>5</span>
                    </IconButton>
                    </div>
                    
                    <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Retweet/>
                        <span>12</span>
                    </IconButton>
                    </div>

                    <div className={styles.buttonFooter}>
                    <IconButton className={styles.iconButton}>
                        <ICON.Like/>
                        <span>8</span>
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
             
        </Layout>
    )
}



export default Index
