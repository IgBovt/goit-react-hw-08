import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectLoader, selectUser } from '../../redux/auth/selectors';
import { errToast } from '../../js/toasts';
import clsx from 'clsx';
import css from './UserMenu.module.css';

const makeBtnClass = loading => {
  return clsx(css.btn, loading && css.btnDisable);
};
export default function UserMenu() {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoader);
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <p className={css.text}>Welcome {user.name}!</p>
      <button
        className={makeBtnClass(loading)}
        onClick={() => {
          dispatch(logOut())
            .unwrap()
            .then()
            .catch(() => {
              errToast();
            });
        }}
        type="button"
      >
        Log out
      </button>
    </div>
  );
}
