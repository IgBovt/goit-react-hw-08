import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from 'clsx';

const makeLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AuthNav() {
  return (
    <div className={css.authList}>
      <NavLink className={makeLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={makeLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
