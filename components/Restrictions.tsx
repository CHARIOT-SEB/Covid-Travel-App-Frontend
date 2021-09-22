import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';

const Restrictions = () => {
  const { countryInfo } = useContext(dataStore);

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text style={styles.itemText}>
          {'The following restrictions are in place in '}
          {countryInfo.country}{' '}
        </Text>
        <Text style={styles.itemText}>
          {countryInfo.restrictions.masks.isRequired
            ? 'Face masks are required to be worn'
            : 'Face masks are not required'}
        </Text>
        <Text style={styles.itemText}>
          {countryInfo.restrictions.masks.moreInfo}
        </Text>
        <Text style={styles.itemText}>
          {'Lockdowns '}
          {countryInfo.restrictions.lockdowns ? 'are' : "aren't"}
          {' currently in force'}
        </Text>
        <Text style={styles.itemText}>
          {'Social Distancing '}
          {countryInfo.restrictions.socialDistancing ? 'is' : "isn't"}
          {' required'}
        </Text>
        <Text style={styles.itemText}>
          {'Contact Tracing '}
          {countryInfo.restrictions.contactTracing ? 'is' : "isn't"}
          {' being carried out'}
        </Text>
        <Text style={styles.itemText}>
          {countryInfo.restrictions.groupMaximums.inside
            ? `The maximum group size indoors is ${countryInfo.restrictions.groupMaximums.inside}`
            : null}
        </Text>

        {countryInfo.restrictions.groupMaximums.outside ? (
          <Text style={styles.itemText}>
            {'The maximum group size outdoors is '}
            {countryInfo.restrictions.groupMaximums.outside}
          </Text>
        ) : null}

        <Text style={styles.itemText}>
          {!countryInfo.healthCareNumber
            ? null
            : `For more information ${countryInfo.healthCareNumber}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    fontFamily: 'Oxygen_700Bold',
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

export default Restrictions;
