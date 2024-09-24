import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleLogin = (values, actions) => {
    console.log(values);
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleLogin}>
      <Form>
        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" autoComplete="off" id={emailFieldId} />
        <label htmlFor={passwordFieldId}>Password</label>
        <Field type="password" name="password" id={passwordFieldId} />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
