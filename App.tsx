// react imports
import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// file imports
import MyTabs from './navigation/MyTabs';
import MyStack from './navigation/MyStack';
import LandingPage from './screens/LandingPage';

const App = () => {
  return (
    <SafeAreaProvider>
      <Modal visible={false}>
        <LandingPage />
      </Modal>
      <View>
        <MyStack />
      </View>
      <View style={styles.container}>
        <MyTabs />
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});

export default App;
