import { useDispatch } from "react-redux";

import { getOneCamper } from "../../redux/campers/operations";
import { switchModal } from "../../redux/campers/slice";

import css from "./Camper.module.css";

const Camper = ({
  camper: {
    gallery,
    name,
    price,
    rating,
    location,
    reviews,
    description,
    adults,
    transmission,
    engine,
    details,
    _id,
  },
}) => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(getOneCamper(_id));
    dispatch(switchModal(true));
  };

  return (
    <div className={css.listItemContainer}>
      <div className={css.photoContainer}>
        <img src={gallery[0]} className={css.photo} alt="Camper photo" />
      </div>
      <div className={css.contentContainer}>
        <div className={css.nameContainer}>
          <h2>{name}</h2>
          <div className={css.priceAndButton}>
            <p>{`€${price},00`}</p>
            <button className={css.favoritesButton} type="button">
              <svg className={css.heartIcon} width="24" height="24">
                <use href="/src/images/sprite/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div>
            <div>
              <svg className={css.starIcon} width="16" height="16">
                <use href="/src/images/sprite/sprite.svg#icon-Rating"></use>
              </svg>
              <p>{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
            <div>
              <svg className={css.locationIcon} width="12" height="15">
                <use href="/src/images/sprite/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>{location}</p>
            </div>
          </div>
          <p>{description}</p>
        </div>
        <ul>
          <li>
            <svg className={css.usersIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Users"></use>
            </svg>
            <p>{adults} adults</p>
          </li>
          <li>
            <p>{transmission[0].toUpperCase() + transmission.substring(1)}</p>
          </li>
          <li>
            <p>{engine[0].toUpperCase() + engine.substring(1)}</p>
          </li>
          <li>{details.kitchen && <p>Kitchen</p>}</li>
          <li>
            {details.beds === 1 ? (
              <p>{`${details.beds} bed`}</p>
            ) : (
              <p>{`${details.beds} beds`}</p>
            )}
          </li>
          <li>{details.airConditioner && <p>AC</p>}</li>
        </ul>
        <button
          className={css.showMoreButton}
          type="button"
          onClick={openModal}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default Camper;
