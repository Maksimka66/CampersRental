import { useEffect } from "react";
import { renderCampers } from "../../redux/campers/operations";

const Catalog = () => {
  useEffect(() => {
    const getCampers = async () => {
      const campers = await renderCampers();

      return campers;
    };

    getCampers();
  }, []);

  return (
    <>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Catalog;
