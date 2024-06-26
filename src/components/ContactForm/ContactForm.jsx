import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { IoIosPersonAdd } from 'react-icons/io';
import { useId } from 'react';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactForm.module.css';
import clsx from 'clsx';
import { notify, addContactToast, addContactErrToast } from '../../js/toasts';

const makeBtnClass = loading => {
  return clsx(css.btn, loading && css.btnDisable);
};

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
const initialValues = { name: '', number: '' };

export default function ContactForm() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectAllContacts);

  const nameID = useId();
  const numberID = useId();

  const handleSubmit = (values, actions) => {
    contacts.find(contact => contact.name.trim('') === values.name.trim(''))
      ? notify()
      : (dispatch(addContact(values))
          .unwrap()
          .then(() => {
            addContactToast(values.name);
          })
          .catch(() => {
            addContactErrToast();
          }),
        actions.resetForm());
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
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
          <button type="submit" className={makeBtnClass(loading)}>
            <IoIosPersonAdd className={css.icon} size={20} />
            Add contact
          </button>
        </Form>
      </Formik>
      <hr className={css.line} />
    </>
  );
}
