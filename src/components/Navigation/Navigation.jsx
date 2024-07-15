import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={css.navList}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? css.navLinkActive : css.navLinkDisabled
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? css.navLinkActive : css.navLinkDisabled
          }
        >
          Catalog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? css.navLinkActive : css.navLinkDisabled
          }
        >
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
