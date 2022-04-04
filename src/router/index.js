import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomHomeNavigator from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createNativeStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="HomeRoot"
      component={BottomHomeNavigator}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name="Story"
      component={StoryScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default Router;
