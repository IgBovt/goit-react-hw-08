import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { IoIosPersonAdd } from 'react-icons/io';
import { useId } from 'react';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import css from './EditModal.module.css';
import {
  notify,
  addContactToast,
  addContactErrToast,
  editContactToast,
  errToast,
} from '../../js/toasts';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Fill this field'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Fill this field'),
});

export default function EditModal({ id, name, number, onClose }) {
  const dispatch = useDispatch();

  const nameID = useId();
  const numberID = useId();

  const handleSubmit = (values, actions) => {
    dispatch(editContact({ id: id, name: values.name, number: values.number }))
      .unwrap()
      .then(() => editContactToast())
      .catch(() => errToast());
    actions.resetForm();
    onClose();
  };

  return (
    <div className={css.backdrop}>
      <Formik
        initialValues={{ name: name, number: number }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label className={css.label} htmlFor={nameID}>
              Name:
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameID}
            ></Field>
            <div className={css.error}>
              <ErrorMessage name="name" as="span" />
            </div>
          </div>

          <div className={css.container}>
            <label className={css.label} htmlFor={numberID}>
              Number:
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberID}
            ></Field>
            <div className={css.error}>
              <ErrorMessage name="number" as="span" />
            </div>
          </div>
          <button type="submit" className={css.btn}>
            <IoIosPersonAdd className={css.icon} size={20} />
            Edit contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
