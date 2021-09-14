import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const IndividualCountry = (props: any) => {
  const nav = props.navigation;
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.logo}> logo</View>
        <View style={styles.countryTitle}>
          <Text>France</Text>
        </View>
        <View style={styles.heatMapContainer}>
          <Text style={styles.heatMap}>Heat Map Contents</Text>
        </View>
        <View style={styles.countryInfoContainer}>
          <Text style={styles.info}>info 1</Text>
          <Text style={styles.info}>info 2</Text>
          <Text style={styles.info}>info 3</Text>
          <Text style={styles.info}>info 4</Text>
        </View>
        <Button title='Add to trips' onPress={() => nav.navigate('Trips')}>
          {' '}
        </Button>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    height: 20,
    padding: 20,
    margin: 10,
    borderRadius: 80,
    alignItems: 'stretch',
    backgroundColor: '#5f9ea0'
  },
  countryTitle: {
    height: 5,
    margin: 20,
    padding: 20,
    width: 70,
    backgroundColor: '#ff7f50',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heatMapContainer: {
    flex: 3,
    flexDirection: 'row',
    margin: 25,
    height: 20,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    padding: 50,
    backgroundColor: '#fff8dc',
    justifyContent: 'center'
  },
  heatMap: {
    flexDirection: 'row',
    margin: 10,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryInfoContainer: {
    backgroundColor: '#fff8dc',
    flex: 4,
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 25,
    height: 20,
    padding: 50
  },
  info: {
    margin: 2,
    alignSelf: 'center'
  }
});

export default IndividualCountry;
