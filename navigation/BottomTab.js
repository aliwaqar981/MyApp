import React, {Component} from 'react'
import {
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';

import DailyLog from '../src/screens/appflow/DailyLog'
// import Favourite from '../src/screens/appFlow/favourites'
import Home from '../src/screens/appflow/Home'
import Icon from 'react-native-ionicons'
import Profile from '../src/screens/appflow/Profile'
import { createBottomTabNavigator } from 'react-navigation-tabs';

const Tabs=createBottomTabNavigator({
    HomeTab: {
        screen:DailyLog ,
        navigationOptions:{
            title:'Daily Log',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="md-home" size={20} color={focused?'black':'grey'}/>),
            
        }
    },

    ProfileTab: {
        screen:Profile,
        navigationOptions:{
            title:'Profile',
            tabBarOptions:{
                activeTintColor:'black'
            },
            tabBarIcon: ({ focused}) => (
                <Icon name="ios-person" size={20} color={focused?'black':'grey'}/>),         
        }
    },

  
  SettingsTab: {
    screen:Home ,
    navigationOptions:{
        title:'Home',
        tabBarOptions:{
            activeTintColor:'black'
        },
        tabBarIcon: ({ focused}) => (
            <Icon name="md-add" size={20} color={focused?'black':'grey'}/>),
        
    }
}
},
  )

  export default createAppContainer(Tabs);