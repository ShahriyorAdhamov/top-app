import Divider from '@/components/divider/divider';
import Link from 'next/link';
import Menu from '../menu/menu';

function Sidebar({ ...props }) {
	return (
		<div {...props}>
			<Link href={'/'}>Logo</Link>
			<Divider />
			<div>Search...</div>
			<Menu />
		</div>
	);
}

export default Sidebar;
