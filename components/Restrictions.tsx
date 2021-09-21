import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';

const Restrictions = () => {
  const { countryInfo } = useContext(dataStore);

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text>
          {'The following restrictions are in place in '}
          {countryInfo.country}{' '}
        </Text>
        <Text>
          {countryInfo.restrictions.masks.isRequired
            ? 'Face masks are required to be worn'
            : 'Face masks are not required'}
        </Text>
        <Text>{countryInfo.restrictions.masks.moreInfo}</Text>
        <Text>
          {'Lockdowns '}
          {countryInfo.restrictions.lockdowns ? 'are' : "aren't"}
          {' currently in force'}
        </Text>
        <Text>
          {'Social Distancing '}
          {countryInfo.restrictions.socialDistancing ? 'is' : "isn't"}
          {' required'}
        </Text>
        <Text>
          {'Contact Tracing '}
          {countryInfo.restrictions.contactTracing ? 'is' : "isn't"}
          {' being carried out'}
        </Text>
        <Text>
          {countryInfo.restrictions.groupMaximums.inside
            ? `The maximum group size indoors is ${countryInfo.restrictions.groupMaximums.inside}`
            : null}
        </Text>

        {countryInfo.restrictions.groupMaximums.outside ? (
          <Text>
            {'The maximum group size outdoors is '}
            {countryInfo.restrictions.groupMaximums.outside}
          </Text>
        ) : null}

        <Text>
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
    margin: 20,
    padding: 20,
    backgroundColor: '#4d94ff',
    borderRadius: 15
  }
});

export default Restrictions;
