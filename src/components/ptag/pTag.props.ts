import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface paragraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode, 
    size: 's' | 'm' | 'l' 
}