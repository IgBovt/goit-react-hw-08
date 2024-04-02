import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Fill this field'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'Your password must include one capital letеer, small letter and number'
    )
    .required('Fill this field'),
});

export default function LoginForm() {
  const emailID = useId();
  const passwordID = useId();

  const handleSubmit = () => {};
  return (
    <Formik
      initialValues=""
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form autoComplete="off">
        <div>
          <label htmlFor={emailID}>Email:</label>
          <Field type="email" name="email" id={emailID}></Field>
          <div>
            <ErrorMessage name="number" as="span" />
          </div>
        </div>

        <div>
          <label htmlFor={passwordID}>Password:</label>
          <Field type="password" name="password" id={passwordID}></Field>
          <div>
            <ErrorMessage name="number" as="span" />
          </div>
        </div>

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
