import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from 'react-native-vector-icons/Foundation';
import SearchIcon from 'react-native-vector-icons/Feather';
import PlusIcon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

import DiscoveryScreen from '../screens/DiscoveryScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import NotificationsScreen from '../screens/NotificationsScreen ';
import HomeScreen from '../screens/HomeScreen';
import HomeRoutes from './home.routes';

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        if (route.name === 'Home') {
          return <HomeIcon name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <SearchIcon name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <PlusIcon name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notification') {
          return <HeartIcon name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return (
            <ProfileIcon name="person-outline" size={size} color={color} />
          );
        }
      },
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: '#a8a8a8',
      tabBarShowLabel: false,
      headerTitleAlign: 'center',
    })}>
    <Tab.Screen
      name="Home"
      options={{
        headerShown: false,
      }}
      component={HomeRoutes}
    />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={CreatePostScreen} />
    <Tab.Screen name="Notification" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={HomeScreen} />
  </Tab.Navigator>
);

export default BottomHomeNavigator;
