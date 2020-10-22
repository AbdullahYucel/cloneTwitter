import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'
import Link from 'next/link'


function BaseButton({children, ...props}) {

    
    return (
        
            <button type="button"  {...props}>{children}</button>
        
    )
}
function LinkButton({href,children, ...props}) {

    
    return (
        
            <Link href={href}>
                <a {...props}>{children}</a>
            </Link>
        
    )
}
function Button({children, className,full=false, ...props}) {
    const Comp = props.href ? LinkButton : BaseButton
    
    return (
        
            <Comp  className={cn(styles.button, className, full && styles.fullWidth)} {...props}>{children}</Comp>
        
    )
}


export default Button
