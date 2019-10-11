import { DrawerNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Login from '../src/screens/authflow/Login'

const AuthStack = createSwitchNavigator({
    // SignupScreen: Signup ,
    Login: Login ,
  },
  {
    initialRouteName: 'Login',
  });
  
//   const AppStack = createStackNavigator({
//     HomeScreen:{
//         screen:Tabs,
//         navigationOptions:{
//             header:null
//         }
//     },
//     Favourite:{
//       screen:Favourites,
//       navigationOptions:{
//           header:null
//       }
//     },
//     CartScreen:{
//       screen:Cart,
//       navigationOptions:{
//         header:null
//       }
//     },
//     ChatScreen:{
//       screen:Chat,
//       navigationOptions:{
//         header:null
//       }
//     },
//     ExploreScreen:{
//       screen:Explore,
//       navigationOptions:{
//         header:null
//       },
//     },

//     FacebookTabBar:{
//       screen:FacebookTabBar,
//       navigationOptions:{
//         header:null
//       }
//     }
    
//     // DashboardScreen: {
//     //     screen: Dashboard,
//     //     navigationOptions: {
//     //         header: null
//     //     }
//     // },
//     // PasswordResetScreen:{
//     //     screen: PasswordReset,
//     //     navigationOptions:{
//     //         title:'Password'
//     //     }
//     // },
//     // SuccessAnimation:{
//     //     screen:SuccessAnimation,
//     //     navigationOptions:{
//     //         header:null
//     //     }
//     // }
    
//   });
  
  // BottomTabNavigatorConfig
  
export default createAppContainer(AuthStack)
  
//   export default createAppContainer(createSwitchNavigator(
//     {
//         Auth: AuthStack,
//         App: AppStack,
//     },
//     {
//         initialRouteName: 'Auth',
//     }
//   ))