import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { getAllCampers } from "../../redux/campers/operations";

const ModalCamperInfo = ({
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
  },
}) => {
  return (
    <div>
      <img src={gallery[0]} alt="Camper photo" width="290" />
      <div>
        <h2>{name}</h2>
        <div>
          <p>{`€${price}.00`}</p>
          <button type="click">Heart</button>
        </div>
      </div>
      <div>
        <div>
          <p>{`${rating}(${reviews.length} Reviews)`}</p>
          <p>{location}</p>
        </div>
        <p>{description}</p>
      </div>
      <ul>
        <li>
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
        <li>
          <p></p>
        </li>
      </ul>
      <button type="click">Show more</button>
      {/* <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav> */}

      {/* <Outlet /> */}
    </div>
  );
};

export default ModalCamperInfo;
