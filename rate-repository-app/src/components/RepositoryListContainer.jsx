import React from 'react';
import { FlatList, View, StyleSheet, Pressable, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import {Picker} from '@react-native-picker/picker';
import theme from '../theme';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    textInput: {
      backgroundColor: theme.colors.repositoryItem,
      marginBottom: 10
    },
    container: {
      margin: 20
    }
  });
  
const ItemSeparator = () => <View style={styles.separator} />;



export class RepositoryListContainer extends React.Component{
  renderHeader = () => {  
    
    const props = this.props;

    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={text => props.setSelectedFilter(text)}
          style={styles.textInput} 
          placeholder="Search" 
          />
        <DropPicker 
          setSelectedOrder={props.setSelectedOrder}
          selectedOrder={props.selectedOrder}
          />        
      </View>
    );
  };

render(){
  
  const props = this.props;
  const history = props.history;

  const repositoryNodes = props.repositories
  ? props.repositories.edges.map((edge) => edge.node)
  : [];

  const RenderItem = ({item}) => (
      <Pressable onPress={() => handleClick(item)}>
          <RepositoryItem repo={item} />
      </Pressable>
  ); 

const handleClick = ({id}) => {
    history.push(`/repositories/${id}`);
};
  
    return (
        <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RenderItem}
        keyExtractor={repo => repo.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

  const DropPicker = ({setSelectedOrder, selectedOrder}) => {

    return(
        <Picker
          selectedValue={selectedOrder}
          onValueChange={(itemValue) =>
            setSelectedOrder(itemValue)
          }>
          <Picker.Item label="Latest repositories" value="date" />
          <Picker.Item label="Highest rated repositories" value="highAverage" />
          <Picker.Item label="Lowest rated repositories" value="lowAverage" />
        </Picker>
    );
  };