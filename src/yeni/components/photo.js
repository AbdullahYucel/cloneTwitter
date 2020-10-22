import React from 'react'
import styles from './photo.module.css'
import cn from 'classnames'


function Photo({src="https://pbs.twimg.com/profile_images/1315982499831480322/LP47mduy_400x400.jpg", big=false}) {

    
    return (
        
            <div  className={cn(styles.photo, big && styles.big)} >
                <img className={styles.img} src={src}  alt=''/>
            </div>
        
    )
}


export default Photo
