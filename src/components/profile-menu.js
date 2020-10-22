import React from 'react'
import styles from './profile-menu.module.css'
import cn from 'classnames'
import Photo from './photo'
import {ArrowBottom} from './icons'
import Button from './button';


function ProfileMenu({profileName="Username", mention="Mention"}) {

    
    return (
        <>
            <Button  className={cn(styles.menu)} >
               <Photo />
               <div className={styles.body}>
                   <p className={styles.p}>{profileName}</p>
                   <p className={styles.p}>@{mention}</p>
               </div>
               <ArrowBottom className={styles.icon}/>
            </Button>
        </>
    )
}


export default ProfileMenu
