import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

import { selectOneCamper } from "../../redux/campers/selectors";

const CamperModalInfo = () => {
  const camper = useSelector(selectOneCamper);

  console.log(camper);

  return (
    <>
      <nav>
        <NavLink to="features">Features</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default CamperModalInfo;
