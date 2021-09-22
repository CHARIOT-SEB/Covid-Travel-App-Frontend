import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

const Returning = () => {
  const { countryInfo } = useContext(dataStore);

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.itemText}>
          {countryInfo.colorList}
          {' List country information here'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#DCEFF9',
    borderRadius: 15
  },
  itemText: {
    fontFamily: 'Oxygen_700Bold',
    color: 'black'
  }
});

export default Returning;
