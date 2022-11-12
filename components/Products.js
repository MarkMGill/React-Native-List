import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import { globalStyles } from '../android/styles/global';
import Card from '../shared/card';

const Products = ({ navigation }) => {

    const [items, setItems] = useState([
    {id: '1', text: 'Milk', color: 'White'},
    {id: '2', text: 'Eggs', color: 'Brown'},
    {id: '3', text: 'Bread', color: 'Green'},
    {id: '4', text: 'Juice', color: 'Yellow'},
  ]);
  /*
  const deleteItem = (id) => {
    setItems(prevItems => {
        return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if(!text) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}], {cancelable: true});
      //setItems(prevItems => {
      //  return [{id: Math.floor((Math.random() * 1000000) + 1), text}, ...prevItems];
      //});
    } else {
      setItems(prevItems => {
        return [{id: Math.floor((Math.random() * 1000000) + 1), text}, ...prevItems];
      });
    }
  }*/

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style="globalStyles.container">
            <FlatList 
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                      <Card>
                        <Text style={globalStyles.titleText}>{item.text}</Text>
                      </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default Products;