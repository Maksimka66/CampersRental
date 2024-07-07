import { useEffect } from "react";
import { getAllCampers } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";

const Catalog = () => {
  //   const campers = useSelector(selectCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  return (
    <>
      <ul>{}</ul>
    </>
  );
};

export default Catalog;
