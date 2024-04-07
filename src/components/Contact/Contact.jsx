import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { formatPhoneNumber } from '../../js/formatPhoneNumber';
import { deleteToast, deleteErrToast } from '../../js/toasts';
import { IoIosMore } from 'react-icons/io';
import css from './Contact.module.css';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';

export default function Contact({ id, name, number }) {
  const [showBtn, setShowBtn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleEditClick = () => {
    setShowBtn(!showBtn);
  };

  const handleEditModal = () => {
    setIsOpenModal(!isOpenModal);
    setShowBtn(false);
  };

  const handleDeleteModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
    setShowBtn(false);
  };
  const handleDeleteModalClose = () => {
    setIsOpenDeleteModal(false);
  };

  return (
    <>
      <div className={css.container}>
        <div>
          <p>
            <FaUserAlt className={css.icon} size={14} />
            {name}
          </p>
          <p>
            <FaPhoneAlt className={css.icon} size={14} />
            {formatPhoneNumber(number)}
          </p>
        </div>

        <a className={css.phoneLink} href={`tel:${number}`}>
          <FaPhoneVolume className={css.phoneIcon} size={20} />
        </a>
        <div className={css.wrapper}>
          <button
            className={css.btnMore}
            type="button"
            onClick={handleEditClick}
          >
            <IoIosMore />
          </button>
          {showBtn && (
            <div className={css.btnContainer}>
              <button className={css.btn} onClick={handleEditModal}>
                Edit
              </button>
              <button className={css.btn} onClick={handleDeleteModal}>
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {isOpenModal && (
        <EditModal
          id={id}
          name={name}
          number={number}
          onClose={handleEditModal}
        />
      )}
      {isOpenDeleteModal && (
        <DeleteModal id={id} name={name} onClose={handleDeleteModalClose} />
      )}
    </>
  );
}
