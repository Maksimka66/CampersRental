import { useSelector } from "react-redux";
import { selectOneCamper } from "../../redux/campers/selectors";

const Reviews = () => {
  const { reviews } = useSelector(selectOneCamper);

  return (
    <div>
      <ul>
        {reviews &&
          reviews.map((review, index) => (
            <li key={index}>
              <div>
                <div>
                  <b>{review.reviewer_name[0]}</b>
                </div>
                <h3>{review.reviewer_name}</h3>
                <div>{review.reviewer_rating}</div>
                <p>{review.comment}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
