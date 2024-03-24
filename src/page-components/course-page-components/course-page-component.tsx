import { HTag, PTag } from '@/components';
import styles from './course-page-component.module.css';
import { CoursePageComponentProps } from './course-page-component.props';

const CoursePageComponent = ({
	firstCategory,
	page,
	products,
}: CoursePageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			{/* TITLE */}
			<div className={styles.title}>
				<HTag tag='h1'>{page.title}</HTag>
				<div>Sort...</div>
			</div>

			{/* PRODUCTS */}
			<div>PRODUCTS</div>

			{/* VACATIONS */}
			<div className={styles.hhTitle}>
				<HTag tag='h2'>Vacations - {page.category}</HTag>
				<PTag color='red' size='m'>
					hh
				</PTag>
			</div>

			{/* HHDATA */}
			<div>HHDATA</div>
		</div>
	);
};

export default CoursePageComponent;
