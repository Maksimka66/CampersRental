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
          <div className={css.ratingAndLocation}>
            <div className={css.littleInfo}>
              <svg className={css.starIcon} width="16" height="16">
                <use href="/src/images/sprite/sprite.svg#icon-Rating"></use>
              </svg>
              <p>{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
            <div className={css.littleInfo}>
              <svg className={css.locationIcon} width="12" height="15">
                <use href="/src/images/sprite/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>{location}</p>
            </div>
          </div>
        </div>

        <p className={css.descriptionText}>{description}</p>

        <ul className={css.infoCamperList}>
          <li className={css.infoCamperItem}>
            <svg className={css.usersIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Users"></use>
            </svg>
            <p>{adults} adults</p>
          </li>
          <li className={css.infoCamperItem}>
            <svg className={css.transIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Container"></use>
            </svg>
            <p>{transmission[0].toUpperCase() + transmission.substring(1)}</p>
          </li>
          <li className={css.infoCamperItem}>
            <svg className={css.engineIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Vector-3"></use>
            </svg>
            <p>{engine[0].toUpperCase() + engine.substring(1)}</p>
          </li>
          <li className={css.infoCamperItem}>
            {details.kitchen && (
              <>
                <svg className={css.kitchenIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Vector-5"></use>
                </svg>
                <p>Kitchen</p>
              </>
            )}
          </li>
          <li className={css.infoCamperItem}>
            {details.beds === 1 ? (
              <>
                <svg className={css.bedIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Container-1"></use>
                </svg>
                <p>{`${details.beds} bed`}</p>
              </>
            ) : (
              <>
                <svg className={css.bedIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Container-1"></use>
                </svg>
                <p>{`${details.beds} beds`}</p>
              </>
            )}
          </li>
          <li className={css.infoCamperItem}>
            {details.airConditioner && (
              <>
                <svg className={css.airConditionerIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Vector-10"></use>
                </svg>
                <p>AC</p>
              </>
            )}
          </li>
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
