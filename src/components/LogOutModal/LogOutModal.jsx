import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { errToast } from '../../js/toasts';
import { selectLoader } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './LogOutModal.module.css';

export default function LogOutModal({ onClose }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  const makeBtnClass = loading => {
    return clsx(css.btnLogout, loading && css.btnDisable);
  };

  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <p>Are you sure you want to LogOut?</p>
        <div className={css.btnContainer}>
          <button
            className={makeBtnClass(loading)}
            type="button"
            onClick={() => {
              dispatch(logOut())
                .unwrap()
                .then()
                .catch(() => {
                  errToast();
                });
            }}
          >
            Yes
          </button>
          <button className={css.btn} type="button" onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
