import { useState, useCallback } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { formatPhoneNumber } from '../../js/formatPhoneNumber';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import { IoIosMore } from 'react-icons/io';
import css from './Contact.module.css';

export default function Contact({ id, name, number }) {
  const [showBtn, setShowBtn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleEditClick = useCallback(() => {
    setShowBtn(prevState => !prevState);
  }, []);

  const handleEditModal = useCallback(() => {
    setIsOpenModal(prevState => !prevState);
    setShowBtn(false);
  }, []);

  const handleDeleteModal = useCallback(() => {
    setIsOpenDeleteModal(prevState => !prevState);
    setShowBtn(false);
  }, []);

  const handleDeleteModalClose = useCallback(() => {
    setIsOpenDeleteModal(false);
  }, []);

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
