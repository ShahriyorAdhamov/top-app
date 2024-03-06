import { AppContextProvider, IAppContext } from '@/context/app.context';
import { FunctionComponent } from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import styles from './layout.module.css';
import { LayoutProps } from './layout.props';
import Sidebar from './sidebar/sidebar';

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
	Component: FunctionComponent<T>
) => {
	return function widthLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};
