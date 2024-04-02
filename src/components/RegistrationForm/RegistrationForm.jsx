import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId, useState } from 'react';
import * as Yup from 'yup';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import css from './RegistrationForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Fill this field'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Fill this field'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Your password must include one capital letеer, small letter and number'
    )
    .required('Fill this field'),
});

export default function RegistrationForm() {
  const [showForm, setShowForm] = useState(true);

  const handleModalClose = e => {
    if (e.target.classList.contains(css.overlay)) {
      setShowForm(false);
    }
  };

  const nameID = useId();
  const emailID = useId();
  const passwordID = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const initialValue = { name: '', email: '', password: '' };

  return (
    showForm && (
      <div className={css.overlay} onClick={handleModalClose}>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={css.form} autoComplete="off">
            <h3>Please text your data</h3>
            <button
              type="button"
              className={css.close}
              onClick={() => setShowForm(false)}
            >
              <IoIosCloseCircleOutline className={css.icon} size={24} />
            </button>

            <div className={css.container}>
              <label htmlFor={nameID}>Name:</label>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name"
                id={nameID}
              ></Field>
              <div className={css.error}>
                <ErrorMessage name="name" as="span" />
              </div>
            </div>

            <div className={css.container}>
              <label htmlFor={emailID}>Email:</label>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email"
                id={emailID}
              ></Field>
              <div className={css.error}>
                <ErrorMessage name="email" as="span" />
              </div>
            </div>

            <div className={css.container}>
              <label htmlFor={passwordID}>Password:</label>
              <Field
                className={css.input}
                type="password"
                name="password"
                placeholder="Password"
                id={passwordID}
              ></Field>
              <div className={css.error}>
                <ErrorMessage name="password" as="span" />
              </div>
            </div>

            <button className={css.btn} type="submit">
              Registration
            </button>
          </Form>
        </Formik>
      </div>
    )
  );
}
