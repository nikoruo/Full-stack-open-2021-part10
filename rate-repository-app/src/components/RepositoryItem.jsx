import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ownerAvatar: {
        width: 50,
        height: 50
    }

});

const RepositoryItem = ({repo}) => {
    return (
      <View>
          <Image style={styles.ownerAvatar} source={{uri: repo.ownerAvatarUrl}} />
          <Text>Full name: {repo.fullName}</Text>
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