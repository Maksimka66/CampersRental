import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { selectOneCamper } from "../../redux/campers/selectors";

import css from "./CamperModalInfo.module.css";

const CamperModalInfo = () => {
  const { name, reviews, rating, location, price, gallery, description } =
    useSelector(selectOneCamper);

  return (
    <div className={css.CamperDetailsInfoContainer}>
      <div className={css.nameAndLocationContainer}>
        <div className={css.nameAndCloseIconContainer}>
          <h2 className={css.nameParagraph}>{name}</h2>
          <svg width="32" height="32">
            <use href="/src/images/sprite/sprite.svg#icon-Rating-1"></use>
          </svg>
        </div>
        <div className={css.starRatingAndLocationContainer}>
          {reviews && (
            <div className={css.starIconAndRatingContainer}>
              <svg className={css.starIcon} width="16" height="16">
                <use href="/src/images/sprite/sprite.svg#icon-Rating"></use>
              </svg>
              <p
                className={css.reviewsDescription}
              >{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
          )}
          <div className={css.locationContainer}>
            <svg className={css.locationIcon} width="16" height="16">
              <use href="/src/images/sprite/sprite.svg#icon-map-pin"></use>
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
    </div>
  );
};

export default CamperModalInfo;
