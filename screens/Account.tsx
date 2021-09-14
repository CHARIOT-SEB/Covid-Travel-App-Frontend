import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Account = (props: any) => {
  const nav = props.navigation;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}> logo</View>
        <View style={styles.accountInfoContainer}>
          <Text style={styles.accountName}> Name: Joe Bloggs</Text>
          <Text style={styles.accountEmail}> Email: joe@bloggs.com</Text>
        </View>
        <View style={styles.pastTripsContainer}>
          <Text style={styles.info}>trip 1</Text>
          <Text style={styles.info}>trip 2</Text>
          <Text style={styles.info}>trip 3</Text>
          <Text style={styles.info}>trip 4</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('LandingPage')}
        >
          {' '}
          LogOut
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('LandingPage')}
        >
          {' '}
          Delete Account
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  accountInfoContainer: {
    margin: 20,
    flex: 1,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  accountName: {
    alignSelf: 'flex-start'
  },
  accountEmail: {
    alignSelf: 'flex-start'
  },
  info: {
    margin: 2,
    alignSelf: 'center',
    padding: 10
  },
  pastTripsContainer: {
    flex: 6,
    alignSelf: 'stretch',
    margin: 10,
    marginTop: 15,
    padding: 5,
    backgroundColor: '#dcdcdc'
  },
  button: {
    flex: 1,
    backgroundColor: '#00ced1',
    height: 5,
    alignSelf: 'center',
    margin: 5,
    marginTop: 25,
    padding: 15,
    textAlign: 'center',
    borderRadius: 15
  }
});

export default Account;
