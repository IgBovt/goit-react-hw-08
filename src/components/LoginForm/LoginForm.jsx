import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoader } from '../../redux/auth/selectors';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';
import { useId } from 'react';
import { errToast } from '../../js/toasts';
import clsx from 'clsx';
import css from './LoginForm.module.css';

const makeBtnClass = loading => {
  return clsx(css.btn, loading && css.btnDisable);
};

export default function LoginForm() {
  const emailID = useId();
  const passwordID = useId();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then()
      .catch(() => {
        errToast();
      });

    actions.resetForm();
  };
  const initialValue = { email: '', password: '' };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
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

        <button className={makeBtnClass(loading)} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
