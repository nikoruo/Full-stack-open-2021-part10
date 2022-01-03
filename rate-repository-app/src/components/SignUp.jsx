import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import theme from '../theme';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import { useHistory } from "react-router-native";
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: theme.colors.repositoryItem
      },
    buttonContainer: {
        padding: 15
    },
    button: {
        backgroundColor: theme.colors.primary
    }
});

let yupSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").min(5),
    passwordConf: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required('Password confirm is required')
});

const CreateUser = () => {
    console.log("Create user");

    let history = useHistory();
    const [user] = useSignUp();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        console.log("on submit",{ username, password });
        try {
          await user({ username, password });
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
         password:"",
         passwordConf: "",
        }}
     onSubmit={onSubmit}
     validationSchema={yupSchema}
   >
     {({ handleSubmit }) => (
       <View style={styles.container}>
         <FormikTextInput name="username" placeholder="Username"/>
         <FormikTextInput name="password" placeholder="Password" secureTextEntry={true}/>
         <FormikTextInput name="passwordConf" placeholder="Password confimation" secureTextEntry={true}/>
         <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={handleSubmit} title="Sign up" />
         </View>
       </View>
     )}
   </Formik>
    );
};
  
  export default CreateUser;