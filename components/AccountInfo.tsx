import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountInfo = () => {
	return (
		<View style={styles.accountInfoContainer}>
			<Text style={styles.text}> Name: Joe Blogs</Text>
			<Text style={styles.text}> Email: joe@blogs.com</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	accountInfoContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
	text: {
		textAlign: 'center',
		margin: 5,
	},
});

export default AccountInfo;
