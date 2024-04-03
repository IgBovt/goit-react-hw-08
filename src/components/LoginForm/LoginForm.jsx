import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useId, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const [showForm, setShowForm] = useState(true);
  // let history = useHistory();
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
            <h3 className={css.tittle}>Please log in</h3>
            <Link className={css.close} to="/">
              <IoIosCloseCircleOutline className={css.icon} size={24} />
            </Link>
            <div className={css.container}>
              <label htmlFor={emailID}>Email:</label>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email"
                id={emailID}
              ></Field>
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
            </div>
            <p className={css.text}>
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
