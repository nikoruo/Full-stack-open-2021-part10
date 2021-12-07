import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        padding: 20,
      },
    ownerAvatar: {
        width: 50,
        height: 50
    }

});

const RepositoryItem = ({repo}) => {
    return (
      <View style={styles.container}>
          <Image style={styles.ownerAvatar} source={{uri: repo.ownerAvatarUrl}} />
          <Text color="primary" fontWeight="bold" fontSize="subheading">Full name: {repo.fullName}</Text>
          <Text>Description: {repo.description}</Text>
          <Text>Language: {repo.language}</Text>
          <Text>Stars: {repo.stargazersCount}</Text>
          <Text>Forks: {repo.forksCount}</Text>
          <Text>Reviews: {repo.reviewCount}</Text>
          <Text>Rating: {repo.ratingAverage}</Text>
      </View>
    );
  };
  
  export default RepositoryItem;