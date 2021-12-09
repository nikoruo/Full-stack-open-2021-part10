import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

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
      marginRight: 15,
      marginTop: 10
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    form: {
        backgroundColor: theme.colors.repositoryItem,
        paddingBottom: 15
    }
  });

const SignInForm = ({handleSubmit}) => {
    return(
        <View style={styles.form}>
            <FormikTextInput testID="usernameField" name="username" placeholder="Username"/>    
            <FormikTextInput testID="passwordField" secureTextEntry name="password" placeholder="Password"/>
            <Pressable style={styles.button} onPress={handleSubmit} testID="submitButton">
                <Text style={styles.text}>Sign in</Text>    
            </Pressable> 
        </View>
    );
};

export default SignInForm;
 