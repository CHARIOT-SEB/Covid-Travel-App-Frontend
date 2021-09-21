import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';

const Returning = () => {
  const { countryInfo } = useContext(dataStore);

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text>
          {countryInfo.colorList}
          {' List country information here'}
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

export default Returning;
