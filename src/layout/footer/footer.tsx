import { FooterProps } from './footer.props';
import styles from './footer.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import Link from 'next/link';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div>Top-app © 2023 - {format(new Date(), 'yyyy')}. All right reserver</div>
			<Link href='#' className='link'>Terms of use</Link>
			<Link href='#' className='link'>Privacy Policy</Link>
		</footer>
	);
};

export default Footer;