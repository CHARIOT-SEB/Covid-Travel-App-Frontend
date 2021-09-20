import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const IsntVaccinated = (props: any) => {
  const { info } = props;
  return (
    <View style={styles.infoContainer}>
      <View>
        <Text>
          {info.country}{' '}
          {info.entryRequirements.withoutFullVaccination.acceptingVisitors
            ? 'is'
            : "isn't"}
          {' accepting travellers who are not fully vaccinated'}
        </Text>
      </View>
      {!info.entryRequirements.withFullVaccination.acceptingVisitors ? null : (
        <View>
          <Text>
            A negative Covid Test is required at least{' '}
            {
              info.entryRequirements.withoutFullVaccination.test
                .maximumHoursBefore
            }{' '}
            hours before travel
          </Text>
          <Text>Documents Required for entry: -</Text>
          <Text>
            {info.entryRequirements.withoutFullVaccination.documentsRequired.map(
              (item: string) => {
                return <Text>{item}</Text>;
              }
            )}
          </Text>
          {info.entryRequirements.withoutFullVaccination.quarantine
            .numberOfDays ? (
            <Text>
              You will be required to quarentine for{' '}
              {
                info.entryRequirements.withoutFullVaccination.quarantine
                  .numberOfDays
              }{' '}
              Days
            </Text>
          ) : (
            <Text>Quarentine is not required</Text>
          )}
        </View>
      )}
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

export default IsntVaccinated;
