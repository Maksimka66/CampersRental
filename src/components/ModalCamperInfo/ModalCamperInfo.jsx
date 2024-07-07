import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { getAllCampers } from "../../redux/campers/operations";

const ModalCamperInfo = () => {
  return (
    <div>
      <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default ModalCamperInfo;
