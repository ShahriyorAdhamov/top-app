import React from 'react';
import { paragraphProps } from './pTag.props';
import cn from 'classnames';
import styles from './pTag.module.css'
const PTag = ({children, size, className, ...props}: paragraphProps) => {
  return (
    <p className={cn(
        className,
        styles.p,
        {[styles.s]: size === 's'},
        {[styles.m]: size === 'm'},
        {[styles.l]: size === 'l'}
    )}
    {...props}
    >{children}</p>
  )
}

export default PTag