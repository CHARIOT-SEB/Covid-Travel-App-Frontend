// react imports
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// file imports
import Home from '../screens/Home';
import Trips from '../screens/Trips';
import IndividualCountry from '../screens/IndividualCountry';

const MyStack = (props: any) => {
  // to access to StackNavigator properties
  const Stack = createNativeStackNavigator();

  // {(props: any) => <Trips {...props} signedIn={props.signedIn}/> }
  console.log(props.signedIn, 'signedin');

  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen
            name='Trips'
            component={Trips}
            signedIn={props.signedIn}
          />
          <Stack.Screen
            name='IndividualCountry'
            component={IndividualCountry}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MyStack;
