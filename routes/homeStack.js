import React from 'react';
import { createStackNavigator  } from "react-navigation-stack";
import About from '../components/About';
import Products from "../components/Products";
import ReviewDetails from "../components/ReviewDetails";
import Header from "../shared/header";

const screens = {
    
    Products: {
        screen: Products,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Products" />,
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Food Details',
        }
    },
   
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 60}
    }
});

export default HomeStack;