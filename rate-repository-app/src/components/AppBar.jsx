import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Theme from '../theme';
import useUser from '../hooks/useUser';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.colors.appBar,
    display: 'flex',
    flexDirection:'row'
  },
});

const AppBar = () => {

  const login = useUser();
  return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab text={"Repositories"} target={"/"} />
                {login.authorizedUser === null ? 
                  <AppBarTab text={"Sign in"} target={"/signin"} /> :
                  <AppBarTab text={"Sign out"} target={"/signout"} /> 
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;