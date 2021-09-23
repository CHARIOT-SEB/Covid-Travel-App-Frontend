import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

const IsVaccinated = () => {
  const { countryInfo } = useContext(dataStore);

    if(!countryInfo.country) return null;

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.itemText}>
          {countryInfo.country}{' '}
          {countryInfo.entryRequirements.withFullVaccination.acceptingVisitors
            ? 'is'
            : "isn't"}
          {' accepting travellers who are fully vaccinated'}
        </Text>
      </View>
      <Text style={styles.itemText}>
        {
          countryInfo.entryRequirements.withFullVaccination
            .daysInnoculatedBeforeEntry
        }
        {' days must have passed since full vaccination before entry'}
      </Text>
      <Text style={styles.itemText}>
        A negative Covid Test is required at least{' '}
        {
          countryInfo.entryRequirements.withFullVaccination.test
            .maximumHoursBefore
        }{' '}
        hours before travel
      </Text>
      <Text style={styles.itemText}>Documents Required for entry: -</Text>
      <Text style={styles.itemText}>
        {countryInfo.entryRequirements.withFullVaccination.documentsRequired.map(
          (item: string) => {
            return <Text key={item}>{item}</Text>;
          }
        )}
      </Text>
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

export default IsVaccinated;
