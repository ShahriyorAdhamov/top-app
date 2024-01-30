import React from 'react';
import {TagProps } from './tag.props';
import cn from 'classnames';
import styles from './tag.module.css'
const PTag = ({children, size = 'm', color = 'primary', href, className, ...props}: TagProps) => {
  return (
    <div className={cn(
        className,
        styles.tag,
        {[styles.s]: size === 's'},
        {[styles.m]: size === 'm'},
        {[styles.ghost]: color === 'ghost'},
        {[styles.green]: color === 'green'},
        {[styles.red]: color === 'red'},
        {[styles.grey]: color === 'grey'},
        {[styles.primary]: color === 'primary'}
    )}
    {...props}
    >
        {
            href? 
                <a href={href}>{children}</a>
                :
                <>{children}</>
        }
    </div>
  )
}

export default PTag