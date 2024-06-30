import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { User, UserContext } from "../App";
import { Form, Button } from "react-bootstrap";
import { SignupSuccessContext } from "../pages/SignupPage";
import {ErrorMessage, Field, Formik} from "formik";

interface Props {
  onUserSubmit: (user: User) => Promise<unknown>;
  children: string;
}

const SignupForm = ({ onUserSubmit, children }: Props) => {
    const { signupSuccess } = useContext(SignupSuccessContext);

    const initialValues = {
        email: "",
        firstName: "",
    };

    const validate = (values: typeof initialValues) => {
        const errors: { email?: string; firstName?: string } = {};

        if (!values.email) {
            errors.email = "Required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid email address";
        }

        if (!values.firstName) {
            errors.firstName = "Required";
        }

        return errors;
    };

    const handleSubmit = (values: typeof initialValues, { setSubmitting }: any) => {
        const newUser: User = {
            email: values.email,
            firstName: values.firstName,
        };

        onUserSubmit(newUser)
            .then(() => {
                localStorage.setItem("firstName", JSON.stringify(values.firstName));
                localStorage.setItem("email", JSON.stringify(values.email));
                setSubmitting(false);
            })
            .catch((err) => {
                console.error(err);
                setSubmitting(false);
            });
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="mt-3">
                    <div className="mb-3">
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <Field
                            type="text"
                            name="firstName"
                            placeholder="Name"
                            className="form-control"
                        />
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                    </div>
                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                        {children}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;

