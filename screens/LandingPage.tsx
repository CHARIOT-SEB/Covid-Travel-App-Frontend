import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingPage = () => {
  return (
    <View>
      <Text>This is the Landing Page Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default LandingPage;