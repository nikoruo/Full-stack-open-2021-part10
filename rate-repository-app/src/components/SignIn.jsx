import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

const SignIn = () => {

    const onSubmit = (values) => {
        console.log(values);
      };

    return (
        <Formik
        initialValues={{
            username: "",
            password: ""
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        {({handleSubmit}) => <SignInForm handleSubmit={handleSubmit}/>}             
        </Formik>
    );
};

export default SignIn;