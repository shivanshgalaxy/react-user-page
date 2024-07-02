import { User } from "../App";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { userSchema } from "../schemas";

interface Props {
  onUserSubmit: (user: User) => Promise<unknown>;
  children: string;
}

const SignupForm = ({ onUserSubmit, children }: Props) => {
  interface Values {
    name: string;
    email: string;
  }

  const { handleSubmit, handleChange, values, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
      },
      onSubmit: (values, actions) => {
        const newUser: User = {
          firstName: values.name,
          email: values.email,
        };
        onUserSubmit(newUser)
          .then(() => {
            localStorage.setItem("firstName", JSON.stringify(values.name));
            localStorage.setItem("email", JSON.stringify(values.email));
          })
          .catch((err) => console.error(err));
        actions.resetForm();
      },
      validationSchema: userSchema,
    });

  console.log(errors);
  return (
    <Form noValidate className="mt-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="inputUsername">
        <Form.Control
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
          onBlur={handleBlur}
          isInvalid={!!errors.name && touched.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputEmail1">
        <Form.Control
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
          onBlur={handleBlur}
          isInvalid={!!errors.email && touched.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" variant="primary">
        {children}
      </Button>
    </Form>
  );
};
export default SignupForm;
