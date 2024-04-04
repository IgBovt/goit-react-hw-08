import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  return (
    <div className={css.container}>
      <p className={css.text}>Welcome {user.name}!</p>
      <button className={css.btn} type="button">
        Log out
      </button>
    </div>
  );
}
