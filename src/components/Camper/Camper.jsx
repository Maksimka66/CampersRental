import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { getOneCamper } from "../../redux/campers/operations";
import {
  addCamperToFavorites,
  removeCamperFromFavorites,
  switchModal,
} from "../../redux/campers/slice";
import { selectFavorites } from "../../redux/campers/selectors";

import css from "./Camper.module.css";

const Camper = ({ camper }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  const navigate = useNavigate();

  console.log(favorites);

  const openModal = () => {
    navigate(`/catalog/${camper._id}`);
    dispatch(getOneCamper(camper._id));
    dispatch(switchModal(true));
  };

  const includesObject = favorites.some(
    (item) => JSON.stringify(item) === JSON.stringify(camper)
  );

  const switchFavorites = () => {
    if (includesObject) {
      dispatch(removeCamperFromFavorites(camper));
    } else {
      dispatch(addCamperToFavorites(camper));
    }
  };

  return (
    <div className={css.listItemContainer}>
      <div className={css.photoContainer}>
        <img src={camper.gallery[0]} className={css.photo} alt="Camper photo" />
      </div>
      <div className={css.contentContainer}>
        <div className={css.unitContainer}>
          <div className={css.nameContainer}>
            <h2 className={css.name}>{camper.name}</h2>
            <div className={css.priceAndButton}>
              <p className={css.price}>{`€${camper.price},00`}</p>
              <button
                className={css.favoritesButton}
                type="button"
                onClick={switchFavorites}
              >
                <svg
                  className={`${
                    includesObject ? css.heartIconIsActive : css.heartIcon
                  }`}
                  width="24"
                  height="24"
                >
                  <use href="/src/images/sprite/sprite.svg#icon-heart"></use>
                </svg>
              </button>
            </div>
          </div>

          <div className={css.ratingAndLocation}>
            <div className={css.littleInfo}>
              <svg className={css.starIcon} width="16" height="16">
                <use href="/src/images/sprite/sprite.svg#icon-Rating"></use>
              </svg>
              <p
                className={css.rating}
              >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
            </div>
            <div className={css.littleInfo}>
              <svg className={css.locationIcon} width="16" height="16">
                <use href="/src/images/sprite/sprite.svg#icon-map-pin"></use>
              </svg>
              <p className={css.location}>{camper.location}</p>
            </div>
          </div>
        </div>

        <p className={css.descriptionText}>{camper.description}</p>

        <ul className={css.infoCamperList}>
          <li className={css.infoCamperItem}>
            <svg className={css.usersIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Users"></use>
            </svg>
            <p className={css.usersText}>{camper.adults} adults</p>
          </li>
          <li className={css.infoCamperItem}>
            <svg className={css.transIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Container"></use>
            </svg>
            <p className={css.transText}>
              {camper.transmission[0].toUpperCase() +
                camper.transmission.substring(1)}
            </p>
          </li>
          <li className={css.infoCamperItem}>
            <svg className={css.engineIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Vector-3"></use>
            </svg>
            <p className={css.engineText}>
              {camper.engine[0].toUpperCase() + camper.engine.substring(1)}
            </p>
          </li>
          <li className={css.infoCamperItem}>
            {camper.details.kitchen && (
              <>
                <svg className={css.kitchenIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Vector-5"></use>
                </svg>
                <p className={css.kitchenText}>Kitchen</p>
              </>
            )}
          </li>
          <li className={css.infoCamperItem}>
            {camper.details.beds === 1 ? (
              <>
                <svg className={css.bedIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Container-1"></use>
                </svg>
                <p className={css.bedsText}>{`${camper.details.beds} bed`}</p>
              </>
            ) : (
              <>
                <svg className={css.bedIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Container-1"></use>
                </svg>
                <p className={css.bedsText}>{`${camper.details.beds} beds`}</p>
              </>
            )}
          </li>
          <li className={css.infoCamperItem}>
            {camper.details.airConditioner && (
              <>
                <svg className={css.airConditionerIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Vector-10"></use>
                </svg>
                <p className={css.airConditionerText}>AC</p>
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
