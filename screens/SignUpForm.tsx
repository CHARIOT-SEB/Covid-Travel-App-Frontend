import React, { useContext } from 'react';
import {
	Text,
	View,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	TextInput,
	Button,
} from 'react-native';
import FormComponent from '../components/formComponent';
import Logo from '../components/Logo';
import { dataStore } from '../providers/Data';

const SignUpForm = (props: any) => {
	const nav = props.navigation;
	const { isLoggedIn } = useContext(dataStore);

	if (isLoggedIn) return null;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.logo}>
				<Logo />
			</View>
			<FormComponent />
			
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 2,
		backgroundColor: '#DCEFF9',
	},
	logo: {

		alignItems: 'center',
		// marginBottom: 50, 
		padding: 20,
		backgroundColor: '#5f9ea0',
	}
});

export default SignUpForm;
