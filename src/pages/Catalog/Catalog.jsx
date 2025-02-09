import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getFirstCampers,
  getRestCampers,
} from "../../redux/campers/operations";
import {
  selectCampers,
  selectLoadingCampers,
} from "../../redux/campers/selectors";
import Camper from "../../components/Camper/Camper";

import css from "./Catalog.module.css";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  const [limit] = useState(4);
  const [page, setPage] = useState(1);

  const campers = useSelector(selectCampers);
  const loader = useSelector(selectLoadingCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFirstCampers());
  }, [dispatch]);

  const totalPages = Math.ceil(13 / limit);

  const getMoreCampers = () => {
    setPage(page + 1);

    dispatch(getRestCampers());
  };

  return loader ? (
    <Loader />
  ) : (
    <>
      <ul className={css.catalogList}>
        {campers.map((camper) => (
          <li key={camper._id} className={css.catalogItem}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      <Outlet />
      {page < totalPages && (
        <button
          className={css.showMoreBtn}
          type="button"
          onClick={getMoreCampers}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
