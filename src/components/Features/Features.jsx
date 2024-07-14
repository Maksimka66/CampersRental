import { useSelector } from "react-redux";

import { selectOneCamper } from "../../redux/campers/selectors";
import FormToOrder from "../FormToOrder/FormToOrder";

import css from "./Features.module.css";

const Features = () => {
  const { adults, transmission, details, engine } =
    useSelector(selectOneCamper);

  return (
    <div>
      <ul className={css.detailsCamperList}>
        <li>
          <svg className={css.usersIcon} width="20" height="20">
            <use href="/src/images/sprite/sprite.svg#icon-Users"></use>
          </svg>
          <p className={css.usersText}>{adults} adults</p>
        </li>
        <li>
          <svg className={css.transIcon} width="20" height="20">
            <use href="/src/images/sprite/sprite.svg#icon-Container"></use>
          </svg>
          <p className={css.transText}>
            {transmission[0].toUpperCase() + transmission.substring(1)}
          </p>
        </li>
        {/* <li>
          {details.airConditioner && (
            <>
              <svg className={css.airConditionerIcon} width="20" height="20">
                <use href="/src/images/sprite/sprite.svg#icon-Vector-10"></use>
              </svg>
              <p className={css.airConditionerText}>AC</p>
            </>
          )}
        </li> */}
        <li>
          <svg className={css.engineIcon} width="20" height="20">
            <use href="/src/images/sprite/sprite.svg#icon-Vector-3"></use>
          </svg>
          <p className={css.engineText}>
            {engine[0].toUpperCase() + engine.substring(1)}
          </p>
        </li>
        {details.kitchen && (
          <li>
            <svg className={css.kitchenIcon} width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Vector-5"></use>
            </svg>
            <p className={css.kitchenText}>kitchen</p>
          </li>
        )}
        <li>
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
        {details.airConditioner && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#con-streamline_hotel-air-conditioner"></use>
            </svg>
            <p>{details.airConditioner} air conditioner</p>
          </li>
        )}
        {details.CD && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Group"></use>
            </svg>
            <p>CD</p>
          </li>
        )}
        {details.radio && (
          <li>
            <svg width="20" height="20">
              <use href="/src/images/sprite/sprite.svg#icon-Group-1"></use>
            </svg>
            <p>Radio</p>
          </li>
        )}
        {details.hob && (
          <li>
            <svg>
              <use href="/src/images/sprite/sprite.svg#icon-Group-2"></use>
            </svg>
            <p>{details.hob} hob</p>
          </li>
        )}
        {details.TV && (
          <li>
            <svg>
              <use href="/src/images/sprite/sprite.svg#icon-Group-2"></use>
            </svg>
            <p>{details.hob} hob</p>
          </li>
        )}
      </ul>
      <FormToOrder />
    </div>
  );
};

export default Features;
