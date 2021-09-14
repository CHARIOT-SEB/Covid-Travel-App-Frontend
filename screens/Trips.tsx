import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const Trips = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>This is the Trips Screen!</Text>
      </View>
    </SafeAreaView>
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

export default Trips;
