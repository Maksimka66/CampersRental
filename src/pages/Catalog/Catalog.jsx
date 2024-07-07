import { useEffect } from "react";
import { getAllCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import ModalCamperInfo from "../../components/ModalCamperInfo/ModalCamperInfo";

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
            <ModalCamperInfo camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Catalog;
