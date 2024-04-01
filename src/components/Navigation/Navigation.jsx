import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav className={css.navList}>
      <NavLink className={makeLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={makeLinkClass} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
