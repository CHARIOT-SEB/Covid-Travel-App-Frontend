import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dataStore } from '../providers/Data';

const IsVaccinated = () => {
	const { countryInfo } = useContext(dataStore);

	return (
		<View style={styles.infoContainer}>
			<View>
				<Text>
					{countryInfo.country}{' '}
					{countryInfo.entryRequirements.withFullVaccination.acceptingVisitors ? 'is' : "isn't"}
					{' accepting travellers who are fully vaccinated'}
				</Text>
			</View>
			<Text>
				{countryInfo.entryRequirements.withFullVaccination.daysInnoculatedBeforeEntry}
				{' days must have passed since full vaccination before entry'}
			</Text>
			<Text>
				A negative Covid Test is required at least{' '}
				{countryInfo.entryRequirements.withFullVaccination.test.maximumHoursBefore} hours before travel
			</Text>
			<Text>Documents Required for entry: -</Text>
			<Text>
				{countryInfo.entryRequirements.withFullVaccination.documentsRequired.map((item: string) => {
					return <Text>{item}</Text>;
				})}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	infoContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
});

export default IsVaccinated;
