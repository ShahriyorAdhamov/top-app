import React from 'react'
import { buttonProps } from './button.props'
import cn from 'classnames'
import styles from './button.module.css'

const Button = ({children, appearance, className, ...props}: buttonProps): JSX.Element => {
  return (
    <button className={cn(
      styles.button, 
      className,
      {[styles.primary]: appearance === 'primary'},
      {[styles.ghost]: appearance === 'ghost'}
      )}
      {...props}
      >{children}</button>
  )
}

export default Button