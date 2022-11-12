import React from 'react';
import {View, Text} from 'react-native';
import Card from '../shared/card';

const ReviewDetails = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('Products')
    }

    return (
        <View>
            <Card>
                <Text>{navigation.getParam('text')}</Text>
                <Text>{navigation.getParam('color')}</Text>
            </Card>
        </View>
    );
}

export default ReviewDetails;

// start at tutorial #27  https://www.youtube.com/watch?v=2s5KNg_5_LA