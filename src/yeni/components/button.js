import React from 'react'
import styles from './button.module.css'
import cn from 'classnames'


function BaseButton({children, ...props}) {

    
    return (
        
            <button type="button"  {...props}>{children}</button>
        
    )
}
function LinkButton({href,children, ...props}) {

    

    
    return (
            <button href={href} >
                <a href={href} {...props}>{children}</a>
             </button>
        
        
    )
}
function Button({children, className,full=false, ...props}) {
    const Comp = props.href ? LinkButton : BaseButton
    
    return (
        
            <Comp  className={cn(styles.button, className, full && styles.fullWidth)} {...props}>{children}</Comp>
        
    )
}


export default Button
