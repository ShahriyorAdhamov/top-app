import { RatingProps } from './rating.props';
import styles from './rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

const Rating = ({ rating, isEditable = false, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
      renderRating(rating);
    }, [rating]);

  	const renderRating = (currentRating: number) => {
		const updateArray = ratingArray.map((r: JSX.Element, idx: number) => (
			<span
        key={idx}
				className={cn(styles.star, {
					[styles.filled]: idx < currentRating,
					[styles.editable]: isEditable,
				})}
				onMouseEnter={() => changeRatingDisplay(idx + 1)}
				onMouseLeave={() => changeRatingDisplay(rating)}
				onClick={() => clickRatingHandler(idx + 1)}
			>
				<StarIcon />
			</span>
		));

		setRatingArray(updateArray);
	};

	const changeRatingDisplay = (index: number) => {
		if (!isEditable) {
			return;
		}

		renderRating(index);
	};

	const clickRatingHandler = (index: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(index);
	};

	return (
		<div className={styles.rating} {...props}>
			{ratingArray.map((rating, idx) => (
				<span key={idx}>{rating}</span>
			))}
		</div>
	);
};

export default Rating;