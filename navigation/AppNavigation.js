import React, {Component, Fragment} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DailyLog from '../src/screens/appflow/DailyLog';
import Login from '../src/screens/authflow/Login'
import {createStackNavigator} from 'react-navigation-stack';

const AuthStack = createSwitchNavigator({
    // SignupScreen: Signup ,
    Login: Login ,
  },
  {
    initialRouteName: 'Login',
  });
  
  const AppStack = createStackNavigator({
    DailyScreen:{
        screen: DailyLog
    }
  });
  
// export default createAppContainer(AuthStack)
  
  export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Auth',
    }
  ))