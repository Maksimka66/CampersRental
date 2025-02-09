import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { selectOneCamper } from "../../redux/campers/selectors";
import ModalWindow from "../ModalWindow/ModalWindow";
import { switchModal } from "../../redux/campers/slice";
import sprite from "../../images/sprite/sprite.svg";

import css from "./CamperModalInfo.module.css";

const CamperModalInfo = () => {
  const { name, reviews, rating, location, price, gallery, description } =
    useSelector(selectOneCamper);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(switchModal(false));
  };

  return (
    <ModalWindow>
      <div className={css.nameAndLocationContainer}>
        <div className={css.nameAndCloseIconContainer}>
          <h2 className={css.nameParagraph}>{name}</h2>
          <button
            className={css.closeButton}
            type="button"
            onClick={closeModal}
          >
            <svg className={css.closeIcon} width="32" height="32">
              <use href={`${sprite}#icon-Rating-1`}></use>
            </svg>
          </button>
        </div>
        <div className={css.starRatingAndLocationContainer}>
          {reviews && (
            <div className={css.starIconAndRatingContainer}>
              <svg className={css.starIcon} width="16" height="16">
                <use href={`${sprite}#icon-Rating`}></use>
              </svg>
              <p
                className={css.reviewsDescription}
              >{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
          )}
          <div className={css.locationContainer}>
            <svg className={css.locationIcon} width="16" height="16">
              <use href={`${sprite}#icon-map-pin`}></use>
            </svg>
            <p className={css.locationDescription}>{location}</p>
          </div>
        </div>
      </div>
      <p className={css.priceInfo}>{`€${price},00`}</p>
      <ul className={css.photoCampersList}>
        {gallery &&
          gallery.map((photo, index) => (
            <li key={index} className={css.photoListItem}>
              <img src={photo} className={css.photoItem} alt="Camper photo" />
            </li>
          ))}
      </ul>
      <p className={css.descriptionInfo}>{description}</p>
      <nav className={css.camperInfoNavigation}>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive ? css.moreInfoLinkActive : css.moreInfoLinkDisabled
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? css.moreInfoLinkActive : css.moreInfoLinkDisabled
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </ModalWindow>
  );
};

export default CamperModalInfo;
