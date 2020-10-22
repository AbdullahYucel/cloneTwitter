import React from 'react'
import styles from './theme-button.module.css'
import Button from './button'
import cn from "classnames"
import {Tweet} from '../components/icons'


function ThemeButton({className, children, flat, full, ...props}) {

    
    return (
        <>
            <Button className={cn(styles.themeButton, className, full && styles.fullWidth )}  {...props}>
            {flat ? <Tweet className={cn(styles.tweet)}/> : 'Tweet'}
            </Button>
        </>
    )
}


export default ThemeButton
