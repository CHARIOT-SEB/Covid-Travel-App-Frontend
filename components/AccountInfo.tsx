import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const AccountInfo = () => {
	return (
		<View style={styles.accountInfoContainer}>
			<Text style={styles.text}><Ionicons name={'md-person'} size={15} />    Joe Blogs</Text>
			<Text style={styles.text}><Ionicons name={'md-mail'} size={15} />    joe@blogs.com</Text>
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
		textAlign: 'left',
		margin: 5,
		fontSize: 15,
	},
});

export default AccountInfo;
