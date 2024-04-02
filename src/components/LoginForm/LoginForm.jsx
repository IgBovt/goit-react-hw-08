import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useId, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const [showForm, setShowForm] = useState(true);

  const handleModalClose = e => {
    if (e.target.classList.contains(css.overlay)) {
      setShowForm(false);
    }
  };

  const emailID = useId();
  const passwordID = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const initialValue = { email: '', password: '' };

  return (
    showForm && (
      <div className={css.overlay} onClick={handleModalClose}>
        <Formik initialValues={initialValue} onSubmit={handleSubmit}>
          <Form className={css.form} autoComplete="off">
            <h3>Please log in</h3>
            <button
              type="button"
              className={css.close}
              onClick={() => setShowForm(false)}
            >
              <IoIosCloseCircleOutline className={css.icon} size={24} />
            </button>
            <div className={css.container}>
              <label htmlFor={emailID}>Email:</label>
              <Field
                className={css.input}
                type="email"
                name="email"
                id={emailID}
              ></Field>
            </div>

            <div className={css.container}>
              <label htmlFor={passwordID}>Password:</label>
              <Field
                className={css.input}
                type="password"
                name="password"
                id={passwordID}
              ></Field>
            </div>
            <p>
              or <Link to="/register">register</Link>
            </p>

            <button className={css.btn} type="submit">
              Log in
            </button>
          </Form>
        </Formik>
      </div>
    )
  );
}
