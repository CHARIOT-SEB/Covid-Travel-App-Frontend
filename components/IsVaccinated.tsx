import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const IsVaccinated = (props: any) => {
  const { info } = props;

  return (
    <View style={styles.infoContainer}>
      <View>
        <Text>
          {info.country}{' '}
          {info.entryRequirements.withFullVaccination.acceptingVisitors
            ? 'is'
            : "isn't"}
          {' accepting travellers who are fully vaccinated'}
        </Text>
      </View>
      <Text>
        {info.entryRequirements.withFullVaccination.daysInnoculatedBeforeEntry}
        {' days must have passed since full vaccination before entry'}
      </Text>
      <Text>
        A negative Covid Test is required at least{' '}
        {info.entryRequirements.withFullVaccination.test.maximumHoursBefore}{' '}
        hours before travel
      </Text>
      <Text>Documents Required for entry: -</Text>
      <Text>
        {info.entryRequirements.withFullVaccination.documentsRequired.map(
          (item: string) => {
            return <Text>{item}</Text>;
          }
        )}
      </Text>
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

export default IsVaccinated;
