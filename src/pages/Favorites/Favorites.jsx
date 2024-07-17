import { useSelector } from "react-redux";

import { selectFavorites } from "../../redux/campers/selectors";
import Camper from "../../components/Camper/Camper";

import css from "./Favorites.module.css";

const Favorites = () => {
  const favoriteCampers = useSelector(selectFavorites);

  return favoriteCampers.length > 0 ? (
    <>
      <h2 className={css.favoritesHeader}>Your favorite campers:</h2>
      <ul className={css.favoritesList}>
        {favoriteCampers.map((camper, index) => (
          <li className={css.favoriteItem} key={index}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h3 className={css.favoritesHeader}>
      No campers have been added to favorites
    </h3>
  );
};

export default Favorites;
