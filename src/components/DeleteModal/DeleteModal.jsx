import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { deleteToast, deleteErrToast } from '../../js/toasts';
import css from './DeleteModal.module.css';

export default function DeleteModal({ name, id, onClose }) {
  const dispatch = useDispatch();
  return (
    <div className={css.backdrop}>
      <div className={css.container}>
        <p>
          Are you sure you want to delete contact <b>{name}</b>?
        </p>
        <div className={css.btnContainer}>
          <button
            className={css.btnDelete}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id))
                .unwrap()
                .then(() => {
                  deleteToast(name);
                })
                .catch(() => {
                  deleteErrToast();
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
