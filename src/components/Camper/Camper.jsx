import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { getAllCampers } from "../../redux/campers/operations";

const ModalCamperInfo = ({ camper: { gallery, name, price } }) => {
  return (
    <div>
      <img src={gallery[0]} alt="Camper photo" />
      <div>
        <h2>{name}</h2>
        <div>
          <p>{`€${price}.00`}</p>
          <button type="click">Heart</button>
        </div>
      </div>
      <div></div>
      {/* <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav> */}

      <Outlet />
    </div>
  );
};

export default ModalCamperInfo;
