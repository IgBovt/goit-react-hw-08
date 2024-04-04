import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import css from './Contact.module.css';
import { deleteToast, deleteErrToast } from '../../js/toasts';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.phoneContainer}>
        <div>
          <p>
            <FaUserAlt className={css.icon} size={14} />
            {name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} size={14} />
            {number}
          </p>
        </div>

        <a className={css.phoneLink} href={`tel:${number}`}>
          <FaPhoneVolume className={css.phoneIcon} size={20} />
        </a>
      </div>
      <hr className={css.line} />
      <div className={css.btnContainer}>
        <button className={css.btnEdit}>Edit</button>
        <button
          className={css.btn}
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
          Delete
        </button>
      </div>
    </div>
  );
}
