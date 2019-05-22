'use strict'

import { createStackNavigator } from "react-navigation";

import HomeScreen from './screens/HomeScreen.js';
import SignInScreen from './screens/SignInScreen';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    SignIn: {
      screen: SignInScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen'
  }
);

export default Navigator;
