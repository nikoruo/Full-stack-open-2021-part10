import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import theme from '../theme';
import StatsItem from './StatsItem';
import Text from './Text';

const styles = StyleSheet.create({
    flexContainerRow: {
        flexDirection: 'row',
        paddingTop: 5,
      },
      flexContainerCol: {
        flexDirection: 'column',
        paddingLeft: 20
      },
      container: {
        padding: 20,
        backgroundColor: theme.colors.repositoryItem,
        marginBottom: 10
      },
    ownerAvatar: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    language: {
        backgroundColor: theme.colors.primary,
        color: "white",
        padding: 7,
        borderRadius: 5
    },
    languageBox: {
        display: "flex", 
        flexDirection: "row",
        paddingTop: 5
    },
    space: {
        paddingTop: 5
    },
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
});

const RepositoryItem = ({repo, button}) => {

  return (
      <View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.ownerAvatar} source={{uri: repo.ownerAvatarUrl}} />
            <View style={styles.flexContainerCol}>
                <Text testID="fullName" fontWeight="bold" fontSize="subheading">{repo.fullName}</Text>
                <Text testID="description" style={styles.space} color="textSecondary">{repo.description}</Text>
                <View style={styles.languageBox}>
                    <Text testID="language" fontWeight="bold" style={styles.language}>{repo.language}</Text>
                </View>
            </View>
          </View>
          <View style={styles.flexContainerRow}>
            <StatsItem testID="stargazersCount" name="Stars" count={repo.stargazersCount}/>
            <StatsItem testID="forksCount" name="Forks" count={repo.forksCount}/>
            <StatsItem testID="reviewCount" name="Reviews" count={repo.reviewCount}/>
            <StatsItem testID="ratingAverage" name="Rating" count={repo.ratingAverage}/>
          </View>
          {button==="kyllä" ? <Pressable style={styles.button} onPress={() => Linking.openURL(repo.url)}>
                      <Text style={styles.text}>Open in GitHub</Text>    
                    </Pressable> 
                    : 
                    <></>
                  }
        </View>
      </View>
    );
  };
  
  export default RepositoryItem;