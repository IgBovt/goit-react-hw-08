import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { deleteToast, deleteErrToast } from '../../js/toasts';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  const handleEditClick = () => {
    setShowBtn(!showBtn);
  };
  return (
    <div className={css.container}>
      {/* <div className={css.phoneContainer}> */}
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
      {/* </div> */}
      <div className={css.wrapper}>
        <button
          className={css.btnArrow}
          type="button"
          onClick={handleEditClick}
        >
          {showBtn ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {showBtn && (
          <div className={css.btnContainer}>
            <button className={css.btn}>Edit</button>
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
        )}
      </div>
    </div>
  );
}
