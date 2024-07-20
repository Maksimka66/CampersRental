import { useSelector } from "react-redux";

import { selectOneCamper } from "../../redux/campers/selectors";
import FormToOrder from "../FormToOrder/FormToOrder";

import css from "./Features.module.css";

const Features = () => {
  const {
    adults,
    transmission,
    details,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector(selectOneCamper);

  const contentString = (str) => {
    return str.split("").map((item) => {
      if (item === "m" || item === "l") {
        return;
      }

      return item;
    });
  };

  const formString = (str) => {
    const checkString = str
      .split("")
      .findIndex((item) => item === item.toUpperCase() && item !== str[0]);

    if (checkString === -1) {
      return `${str[0].toUpperCase()}${str.substring(1)}`;
    } else {
      return `${str[0].toUpperCase()}${str.substring(1, checkString)} ${str[
        checkString
      ].toLowerCase()}${str.substring(checkString + 1)}`;
    }
  };

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
          {details.kitchen !== 0 && (
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
          {details.CD !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.cdIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group"></use>
              </svg>
              <p className={css.cdText}>CD</p>
            </li>
          )}
          {details.radio !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.radioIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group-1"></use>
              </svg>
              <p className={css.radioText}>Radio</p>
            </li>
          )}
          {details.hob !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.hobIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group-2"></use>
              </svg>
              <p className={css.hobText}>{details.hob} hob</p>
            </li>
          )}
          {details.TV !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.tvIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vertical-container"></use>
              </svg>
              <p className={css.tvText}>TV</p>
            </li>
          )}
          {details.microwave !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.microwaveIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Group-3"></use>
              </svg>
              <p className={css.microwaveText}>Microwave</p>
            </li>
          )}
          {details.freezer !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.freezerIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-arcticons_freezer"></use>
              </svg>
              <p className={css.freezerText}>Freezer</p>
            </li>
          )}
          {details.shower !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.showerIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vector-4"></use>
              </svg>
              <p className={css.showerText}>Shower</p>
            </li>
          )}
          {details.toilet !== 0 && (
            <li className={css.moreInfoCamperItem}>
              <svg className={css.toiletIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vector-7"></use>
              </svg>
              <p className={css.toiletText}>Toilet</p>
            </li>
          )}
        </ul>
        <div className={css.anotherDetailsContainer}>
          <h3 className={css.vehicleDetailsHeader}>Vehicle details</h3>
          <div className={css.decorativeLine}></div>
          <ul className={css.anotherDetailsList}>
            <li className={css.anotherDetail}>
              <p className={css.detail}>Form</p>
              <p className={css.detail}>{formString(form)}</p>
            </li>
            <li className={css.anotherDetail}>
              <p className={css.detail}>Length</p>
              <p className={css.detail}>{contentString(length)} m</p>
            </li>
            <li className={css.anotherDetail}>
              <p className={css.detail}>Width</p>
              <p className={css.detail}>{contentString(width)} m</p>
            </li>
            <li className={css.anotherDetail}>
              <p className={css.detail}>Height</p>
              <p className={css.detail}>{contentString(height)} m</p>
            </li>
            <li className={css.anotherDetail}>
              <p className={css.detail}>Tank</p>
              <p className={css.detail}>{contentString(tank)} l</p>
            </li>
            <li className={css.anotherDetail}>
              <p className={css.detail}>Consumption</p>
              <p className={css.detail}>{consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <FormToOrder />
    </div>
  );
};

export default Features;
