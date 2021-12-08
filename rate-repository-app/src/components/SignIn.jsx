import { Formik } from 'formik';
import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: theme.colors.primary,
      marginLeft: 15,
      marginRight: 15
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
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
        >
        {({handleSubmit}) => {
            return(
                <View>
                    <FormikTextInput name="username" placeholder="Username"/>    
                    <FormikTextInput name="password" placeholder="Password"/>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.text}>Sign in</Text>    
                    </Pressable> 
                </View>
            );
        }}             
        </Formik>
    );
};

export default SignIn;