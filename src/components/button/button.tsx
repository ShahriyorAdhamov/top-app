import React from 'react'
import { ButtonProps } from './button.props'
import cn from 'classnames'
import styles from './button.module.css'
import ArrowIcon from './arrow.svg'

const Button = ({children, appearance, arrow, className, ...props}: ButtonProps): JSX.Element => {
  return (
    <button className={cn(
      styles.button, 
      className,
      {[styles.primary]: appearance === 'primary'},
      {[styles.ghost]: appearance === 'ghost'}
      )}
      {...props}
      >
        {children}
        {arrow !== 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow === 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
      </button>
  )
}

export default Button