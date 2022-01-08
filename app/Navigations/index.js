import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/WelcomeScreen/Welcome';
import Track from '../screens/TrackScreen/Track';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tracking"
        component={Track}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
