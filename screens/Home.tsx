import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from '../navigation/MyTabs';

const Tabs = createBottomTabNavigator();

const Home = (props: any) => {
  const nav = props.navigation;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>The Covid-19 Travel App Name</Text>
        <Button title="My Trips" onPress={() => nav.navigate('Trips')} />
        <Button
          title="Choose Country"
          onPress={() => nav.navigate('IndividualCountry')}
        />
        <Text>country searcher thing here</Text>
        <MyTabs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
