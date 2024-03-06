import Menu from '../menu/menu';

function Sidebar({ ...props }) {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
}

export default Sidebar;
