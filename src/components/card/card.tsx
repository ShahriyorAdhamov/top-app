import cn from 'classnames';
import styles from './card.module.css';
import { CardProps } from './card.props';

const Card = ({
	children,
	color,
	className,
	...props
}: CardProps): JSX.Element => {
	return (
		<div
			className={cn(styles.card, className, {
				[styles.primary]: color === 'primary',
			})}
			{...props}
		>
			{children}
		</div>
	);
};

export default Card;
