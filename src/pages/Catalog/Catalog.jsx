import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCampers } from "../../redux/campers/operations";
import { selectCampers } from "../../redux/campers/selectors";
import Camper from "../../components/Camper/Camper";

const Catalog = () => {
  const campers = useSelector(selectCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  console.log(campers);

  return (
    <>
      <ul>
        {campers.map((camper) => (
          <li key={camper._id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Catalog;
