import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoader } from '../../redux/auth/selectors';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';
import { errToast } from '../../js/toasts';
import * as Yup from 'yup';
import clsx from 'clsx';
import 'react-toastify/dist/ReactToastify.css';
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$,.\-])[a-zA-Z\d@#$,.\\-]{6,}$/,
      'Your password must include one capital letеer, small letter and number'
    )
    .required('Fill this field'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Fill this field'),
  rules: Yup.boolean().oneOf([true], 'You must accept the rules'),
});

const makeBtnClass = loading => {
  return clsx(css.btn, loading && css.btnDisable);
};

export default function RegistrationForm() {
  const nameID = useId();
  const emailID = useId();
  const passwordID = useId();
  const repeatPasswordID = useId();
  const rulesId = useId();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);

  const handleSubmit = (values, actions) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(data))
      .unwrap()
      .then()
      .catch(() => {
        errToast();
        return;
      });
    actions.resetForm();
  };
  const initialValue = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    rules: false,
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form autoComplete="off">
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

        <div className={css.container}>
          <label htmlFor={repeatPasswordID}>Repeat password:</label>
          <Field
            className={css.input}
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            id={repeatPasswordID}
          ></Field>
          <div className={css.error}>
            <ErrorMessage name="repeatPassword" as="span" />
          </div>
        </div>

        <div className={css.container}>
          <label className={css.rulesContainer} htmlFor={rulesId}>
            <Field
              className={css.checkbox}
              type="checkbox"
              name="rules"
              id={rulesId}
            />
            Accept
            <a
              className={css.rulesLink}
              href="https://dictionary.cambridge.org/dictionary/english/rule"
              target="blank"
            >
              rules
            </a>
          </label>

          <div className={css.error}>
            <ErrorMessage name="rules" as="span" />
          </div>
        </div>

        <button className={makeBtnClass(loading)} type="submit">
          Registration
        </button>
      </Form>
    </Formik>
  );
}
