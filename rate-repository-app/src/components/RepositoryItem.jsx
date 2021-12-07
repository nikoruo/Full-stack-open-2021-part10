import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
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
        backgroundColor: theme.colors.repositoryItem
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
    }
});

const RepositoryItem = ({repo}) => {
    return (
      <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.ownerAvatar} source={{uri: repo.ownerAvatarUrl}} />
            <View style={styles.flexContainerCol}>
                <Text fontWeight="bold" fontSize="subheading">{repo.fullName}</Text>
                <Text style={styles.space} color="textSecondary">{repo.description}</Text>
                <View style={styles.languageBox}>
                    <Text fontWeight="bold" style={styles.language}>{repo.language}</Text>
                </View>
            </View>
          </View>
          <View style={styles.flexContainerRow}>
            <StatsItem name="Stars" count={repo.stargazersCount}/>
            <StatsItem name="Forks" count={repo.forksCount}/>
            <StatsItem name="Reviews" count={repo.reviewCount}/>
            <StatsItem name="Rating" count={repo.ratingAverage}/>
          </View>
      </View>
    );
  };
  
  export default RepositoryItem;