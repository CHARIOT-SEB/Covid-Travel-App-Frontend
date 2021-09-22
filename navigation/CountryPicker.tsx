// See https://www.npmjs.com/package/@react-native-picker/picker for more information

import 'react-native-gesture-handler';
// react imports

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
// file imports
import { Picker } from '@react-native-picker/picker';
import { getCountries } from '../screens/api';
import { dataStore } from '../providers/Data';
import { useFonts, Oxygen_400Regular } from '@expo-google-fonts/oxygen';

function CountryPicker(props: any) {
  // destructuring each state from the dataStore to be used
  const { countryName, setCountryName } = useContext(dataStore);
  const { countries, setCountries } = useContext(dataStore);

  const nav: any = props.nav;

  //   set the countries from api
  useEffect(() => {
    getCountries().then((countries: any) => {
      setCountries(countries);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Got a destination in mind? </Text>

      <Text style={styles.text}>Please choose a country</Text>
      <Picker
        selectedValue={countryName}
        onValueChange={(value, index) => {
          setCountryName(value);
        }}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        {countries.map((country) => {
          return <Picker.Item key={country} label={country} value={country} />;
        })}
      </Picker>
      <Pressable style={styles.button} onPress={() => nav.navigate('Country')}>
        <Text
          style={{
            fontFamily: 'Oxygen_400Regular',
            color: '#fff',
            margin: 10,
            fontSize: 20,
            position: 'relative'
          }}
        >
          Go
        </Text>
      </Pressable>
    </View>
  );
}

export default CountryPicker;

const GREY = '#9E9E9E';

// Some default styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Oxygen_400Regular',
    fontSize: 18,
    marginTop: 40,
    textAlign: 'center'
  },
  picker: {
    marginVertical: 0,
    width: 300,
    padding: 10
  },
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 25
  }
});
