import { useSelector } from "react-redux";

import { selectOneCamper } from "../../redux/campers/selectors";
import FormToOrder from "../FormToOrder/FormToOrder";

import css from "./Reviews.module.css";

const Reviews = () => {
  const { reviews } = useSelector(selectOneCamper);

  const starsRatingMarkup = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(i);
    }
    return stars;
  };

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewList}>
        {reviews &&
          reviews.map((review, index) => (
            <li className={css.reviewListItem} key={index}>
              <div className={css.nameAndRatingContainer}>
                <span className={css.firstLetter}>
                  {review.reviewer_name[0]}
                </span>
                <div className={css.littleContainer}>
                  <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
                  <ul className={css.ratingStarsList}>
                    {starsRatingMarkup(review.reviewer_rating).map((i) => (
                      <li key={i}>
                        <svg width="16" height="16">
                          <use href="/src/images/sprite/sprite.svg#icon-Rating"></use>
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className={css.reviewText}>{review.comment}</p>
            </li>
          ))}
      </ul>
      <FormToOrder />
    </div>
  );
};

export default Reviews;
