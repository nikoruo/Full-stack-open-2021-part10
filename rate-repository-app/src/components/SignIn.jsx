import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';

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
        >
        {({handleSubmit}) => <SignInForm handleSubmit={handleSubmit}/>}             
        </Formik>
    );
};

export default SignIn;