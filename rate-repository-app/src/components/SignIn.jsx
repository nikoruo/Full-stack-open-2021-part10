import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import React from 'react';
import SignInForm from './SignInForm';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
});

const SignIn = () => {
    let history = useHistory();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
          await signIn({ username, password });
          history.push("/");
        } catch (e) {
          console.log(e);
        }
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