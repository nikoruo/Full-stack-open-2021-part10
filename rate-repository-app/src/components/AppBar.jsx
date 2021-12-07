import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import Theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: Theme.colors.appBar,
    display: 'flex',
    flexDirection:'row'
  },
});

const AppBar = () => {
  return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab text={"Repositories"} target={"/"} />
                <AppBarTab text={"Sign in"} target={"/signin"} />
            </ScrollView>
        </View>
    );
};

export default AppBar;