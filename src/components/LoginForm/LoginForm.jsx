import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { useId } from 'react';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const emailID = useId();
  const passwordID = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
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

        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
