import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { dataStore } from '../providers/Data';

const IsntVaccinated = () => {
	const { countryInfo } = useContext(dataStore);

	return (
		<View style={styles.infoContainer}>
			<View>
				<Text>
					{countryInfo.country}{' '}
					{countryInfo.entryRequirements.withoutFullVaccination.acceptingVisitors ? 'is' : "isn't"}
					{' accepting travellers who are not fully vaccinated'}
				</Text>
			</View>
			{!countryInfo.entryRequirements.withFullVaccination.acceptingVisitors ? null : (
				<View>
					<Text>
						A negative Covid Test is required at least{' '}
						{countryInfo.entryRequirements.withoutFullVaccination.test.maximumHoursBefore} hours
						before travel
					</Text>
					<Text>Documents Required for entry: -</Text>
					<Text>
						{countryInfo.entryRequirements.withoutFullVaccination.documentsRequired.map(
							(item: string) => {
								return <Text>{item}</Text>;
							}
						)}
					</Text>
					{countryInfo.entryRequirements.withoutFullVaccination.quarantine.numberOfDays ? (
						<Text>
							You will be required to quarentine for{' '}
							{countryInfo.entryRequirements.withoutFullVaccination.quarantine.numberOfDays} Days
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
		borderRadius: 15,
	},
});

export default IsntVaccinated;
