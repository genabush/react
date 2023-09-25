import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Email is not valid")
          .required("Email is Required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Enter email" />
          <ErrorMessage name="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" placeholder="Enter password" />
          <ErrorMessage name="password" />
        </div>
      </Form>
    </Formik>
  );
};
