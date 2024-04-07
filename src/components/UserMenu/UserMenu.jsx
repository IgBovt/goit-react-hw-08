import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectLoader, selectUser } from '../../redux/auth/selectors';
import { errToast } from '../../js/toasts';
import clsx from 'clsx';
import css from './UserMenu.module.css';
import { useState } from 'react';
import LogOutModal from '../LogOutModal/LogOutModal';

const makeBtnClass = loading => {
  return clsx(css.btn, loading && css.btnDisable);
};
export default function UserMenu() {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoader);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOutModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={css.container}>
        <p className={css.text}>Welcome {user.name}!</p>
        <button
          className={makeBtnClass(loading)}
          type="button"
          onClick={handleLogOutModal}
        >
          Log out
        </button>
      </div>
      {isOpen && <LogOutModal onClose={handleLogOutModal} />}
    </>
  );
}
