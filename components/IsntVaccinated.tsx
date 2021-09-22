import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

const IsntVaccinated = () => {
  const { countryInfo } = useContext(dataStore);

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.itemText}>
          {countryInfo.country}{' '}
          {countryInfo.entryRequirements.withoutFullVaccination
            .acceptingVisitors
            ? 'is'
            : 'is not'}
          {' accepting travellers who are not fully vaccinated'}
        </Text>
      </View>
      {!countryInfo.entryRequirements.withFullVaccination
        .acceptingVisitors ? null : (
        <View>
          <Text style={styles.itemText}>
            A negative Covid Test is required at least{' '}
            {
              countryInfo.entryRequirements.withoutFullVaccination.test
                .maximumHoursBefore
            }{' '}
            hours before travel
          </Text>
          <Text style={styles.itemText}>Documents Required for entry: -</Text>
          <Text style={styles.itemText}>
            {countryInfo.entryRequirements.withoutFullVaccination.documentsRequired.map(
              (item: string) => {
                return <Text key={item}>{item}</Text>;
              }
            )}
          </Text>
          {countryInfo.entryRequirements.withoutFullVaccination.quarantine
            .numberOfDays ? (
            <Text style={styles.itemText}>
              You will be required to quarentine for{' '}
              {
                countryInfo.entryRequirements.withoutFullVaccination.quarantine
                  .numberOfDays
              }{' '}
              Days
            </Text>
          ) : (
            <Text style={styles.itemText}>Quarentine is not required</Text>
          )}
        </View>
      )}
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

export default IsntVaccinated;
