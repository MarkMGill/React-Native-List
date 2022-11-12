import React from 'react';
import {View, Text, Button} from 'react-native';

const About = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('Products')
    }

    return (
        <View>
            <Text>About</Text>
        </View>
    );
}

export default About;