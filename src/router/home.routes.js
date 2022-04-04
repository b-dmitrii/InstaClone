import React from 'react';

import {Image} from 'react-native';

import CameraIcon from 'react-native-vector-icons/Feather';
import PaperIcon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/logo.png';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createNativeStackNavigator();

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StoryScreen from '../screens/StoryScreen';

const HomeRoutes = () => (
  <HomeStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Instagram',

        headerTitle: () => {
          return (
            <Image
              source={logo}
              resizeMode="contain"
              style={{width: 150, height: 40}}
            />
          );
        },
        headerLeft: () => {
          return (
            <CameraIcon
              name="camera"
              size={25}
              color={'#000'}
              style={{marginLeft: 10}}
            />
          );
        },
        headerRight: () => {
          return (
            <PaperIcon
              name="paper-plane-outline"
              size={25}
              color={'#000'}
              style={{marginRight: 10}}
            />
          );
        },
      }}
    />
  </HomeStack.Navigator>
);

export default HomeRoutes;
