import React from 'react';
import {View} from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';

const Items = () => {
    return (
        <View>
            <AddItem />
            <ListItem />
        </View>
    );
}

export default Items;