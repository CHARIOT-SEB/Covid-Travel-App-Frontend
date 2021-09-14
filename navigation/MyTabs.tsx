import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home';
import Account from '../screens/Account';

const Tabs = createBottomTabNavigator();

const handleIcons = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Account') {
      iconName = focused ? 'person' : 'person-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray'
});

function MyTabs() {
  return (
    <Tabs.Navigator screenOptions={handleIcons}>
      <Tabs.Screen name="Account" component={Account} />
      <Tabs.Screen name="Home" component={Home} />
    </Tabs.Navigator>
  );
}

export default MyTabs;
