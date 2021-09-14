import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

const Home = (props: any) => {
  const nav = props.navigation;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <br />
        <br />
        <Text>The Covid-19 Travel App Name</Text>
        <br />
        <Button title="My Trips" onPress={() => nav.navigate('Trips')} />
        <br />
        <Text>country searcher thing here</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
