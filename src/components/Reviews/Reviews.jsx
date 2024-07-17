import { useSelector } from "react-redux";

import { selectOneCamper } from "../../redux/campers/selectors";
import FormToOrder from "../FormToOrder/FormToOrder";

import css from "./Reviews.module.css";

const Reviews = () => {
  const { reviews } = useSelector(selectOneCamper);

  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewList}>
        {reviews &&
          reviews.map((review, index) => (
            <li className={css.reviewListItem} key={index}>
              <div className={css.nameAndRatingContainer}>
                <b>{review.reviewer_name[0]}</b>
                <h3 className={css.reviewerName}>{review.reviewer_name}</h3>
                <div>{review.reviewer_rating}</div>
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
