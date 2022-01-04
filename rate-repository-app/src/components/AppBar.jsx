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

  const login = useUser({"reviews": false});
  return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab text={"Repositories"} target={"/"} />
                {login.authorizedUser === null ? 
                  <View style={{flexDirection: "row"}}>
                    <AppBarTab text={"Sign in"} target={"/signin"} />
                    <AppBarTab text={"Sign up"} target={"/signup"} />
                  </View>
                   :
                  <View style={{flexDirection: "row"}}>
                    <AppBarTab text={"Create a review"} target={"/createreview"} />
                    <AppBarTab text={"My reviews"} target={"/userreviews"} />
                    <AppBarTab text={"Sign out"} target={"/signout"} /> 
                  </View>
                }
            </ScrollView>
        </View>
    );
};

export default AppBar;