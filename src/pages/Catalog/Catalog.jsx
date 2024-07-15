import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import Camper from "../../components/Camper/Camper";

import css from "./Catalog.module.css";
import { Outlet } from "react-router-dom";

const Catalog = () => {
  const campers = useSelector(selectCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  console.log(campers);

  return (
    <>
      <ul className={css.catalogList}>
        {campers.map((camper) => (
          <li key={camper._id} className={css.catalogItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Catalog;
