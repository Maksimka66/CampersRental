import { useSelector } from "react-redux";

import { selectOneCamper } from "../../redux/campers/selectors";
import FormToOrder from "../FormToOrder/FormToOrder";

import css from "./Features.module.css";

const Features = () => {
  const { adults, transmission, details, engine } =
    useSelector(selectOneCamper);

  return (
    <div className={css.featuresContainer}>
      <div className={css.listsContainer}>
        <ul className={css.detailsCamperList}>
          <li className={css.moreInfoCamperItem}>
            <svg className={css.usersIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Users"></use>
            </svg>
            <p className={css.usersText}>{adults} adults</p>
          </li>
          <li className={css.moreInfoCamperItem}>
            <svg className={css.transIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Container"></use>
            </svg>
            <p className={css.transText}>
              {transmission[0].toUpperCase() + transmission.substring(1)}
            </p>
          </li>
          <li className={css.moreInfoCamperItem}>
            {details.airConditioner && (
              <>
                <svg className={css.airConditionerIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Vector-10"></use>
                </svg>
                <p className={css.airConditionerText}>AC</p>
              </>
            )}
          </li>
          <li className={css.moreInfoCamperItem}>
            <svg className={css.engineIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Vector-3"></use>
            </svg>
            <p className={css.engineText}>
              {engine[0].toUpperCase() + engine.substring(1)}
            </p>
          </li>
          {details.kitchen && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.kitchenIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vector-5"></use>
              </svg>
              <p className={css.kitchenText}>kitchen</p>
            </li>
          )}
          <li className={css.moreInfoCamperItem}>
            {details.beds === 1 ? (
              <>
                <svg className={css.bedIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Container-1"></use>
                </svg>
                <p className={css.bedsText}>{`${details.beds} bed`}</p>
              </>
            ) : (
              <>
                <svg className={css.bedIcon} width="20" height="20">
                  <use href="/src/images/sprite/sprite.svg#icon-Container-1"></use>
                </svg>
                <p className={css.bedsText}>{`${details.beds} beds`}</p>
              </>
            )}
          </li>
          {details.CD && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group"></use>
              </svg>
              <p>CD</p>
            </li>
          )}
          {details.radio && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group-1"></use>
              </svg>
              <p>Radio</p>
            </li>
          )}
          {details.hob && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group-2"></use>
              </svg>
              <p>{details.hob} hob</p>
            </li>
          )}
          {details.TV && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vertical-container"></use>
              </svg>
              <p>TV</p>
            </li>
          )}
          {details.microwave && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group-3"></use>
              </svg>
              <p></p>
            </li>
          )}
          {details.freezer && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-arcticons_freezer"></use>
              </svg>
            </li>
          )}
          {details.shower && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vector-4"></use>
              </svg>
            </li>
          )}
          {details.toilet && (
            <li className={css.moreInfoCamperItem}>
              <svg width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vector-7"></use>
              </svg>
            </li>
          )}
        </ul>
        <div className={css.anotherDetailsContainer}>
          <h3 className={css.vehicleDetailsHeader}>Vehicle details</h3>
          <ul className={css.anotherDetailsList}>
            <li>
              <div>
                <p>Form</p>
                <p></p>
              </div>
            </li>
            <li>
              <div>
                <p>Length</p>
                <p></p>
              </div>
            </li>
            <li>
              <div>
                <p>Width</p>
                <p></p>
              </div>
            </li>
            <li>
              <div>
                <p>Height</p>
                <p></p>
              </div>
            </li>
            <li>
              <div>
                <p>Tank</p>
                <p></p>
              </div>
            </li>
            <li>
              <div>
                <p>Consumption</p>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <FormToOrder />
    </div>
  );
};

export default Features;
