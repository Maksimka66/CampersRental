import { useSelector } from "react-redux";

import { selectFavorites } from "../../redux/campers/selectors";

const Favorites = () => {
  const favoriteCampers = useSelector(selectFavorites);
};

export default Favorites;
