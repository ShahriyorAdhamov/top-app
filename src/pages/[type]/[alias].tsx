import { firstLevelMenu } from '@/helpers/helper';
import { CoursePageComponent } from '@/page-components';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { MenuItem } from '../../../interfaces/menu.interface';
import { PageModel } from '../../../interfaces/page.interface';
import { ProductModel } from '../../../interfaces/product.interface';
import { withLayout } from '../../layout/layout';

const Index = ({ products, firstCategory, page }: PageProps) => {
	return (
		<CoursePageComponent
			products={products}
			firstCategory={firstCategory}
			page={page}
		/>
	);
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
	query,
}) => {
	const { alias, type } = query;

	if (!alias) {
		return { notFound: true };
	}

	const firstCategoryItem = firstLevelMenu.find(c => c.route === type);

	if (!firstCategoryItem) {
		return { notFound: true };
	}

	const { data: menu } = await axios.post<MenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{
			firstCategory: firstCategoryItem.id,
		}
	);
	const { data: page } = await axios.get<PageModel>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${alias}`
	);
	const { data: products } = await axios.post<ProductModel[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
		{
			category: alias,
		}
	);

	return {
		props: { menu, page, products, firstCategory: firstCategoryItem.id },
	};
};

interface PageProps extends Record<string, unknown> {
	menu: MenuItem[];
	page: PageModel;
	products: ProductModel[];
	firstCategory: number;
}
