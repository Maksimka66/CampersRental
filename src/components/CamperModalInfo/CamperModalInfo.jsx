import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { selectOneCamper } from "../../redux/campers/selectors";

import css from "./CamperModalInfo.module.css";

const CamperModalInfo = () => {
  const { name, reviews, rating, location, price, gallery, description } =
    useSelector(selectOneCamper);

  return (
    <>
      <div>
        <h2>{name}</h2>
        <div>
          {reviews && <p>{`${rating}(${reviews.length} Reviews)`}</p>}
          <p>{location}</p>
        </div>
        <p>{`€${price},00`}</p>
      </div>
      <ul>
        {gallery &&
          gallery.map((photo, index) => (
            <li key={index}>
              <img src={photo} alt="Camper photo" />
            </li>
          ))}
      </ul>
      <p>{description}</p>
      <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default CamperModalInfo;
