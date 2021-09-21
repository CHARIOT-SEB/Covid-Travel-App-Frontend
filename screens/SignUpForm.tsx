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
    const {isLoggedIn} = useContext(dataStore);

    if(isLoggedIn) return null;
    
	return (
		<SafeAreaView>
			<View>
				<Logo />
			</View>

			<FormComponent />
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						nav.navigation('Home');
					}}
				>
					<Text style={styles.btnText}> Back </Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		width: 300,
		alignItems: 'center',
		borderWidth: 3,
		borderColor: '#ddd',
		borderRadius: 6,
	},
	logo: {
		height: 10,
		padding: 20,
		margin: 10,
		borderRadius: 80,
		alignItems: 'stretch',
		backgroundColor: '#5f9ea0',
	},
	btn: {
		borderRadius: 8,
		marginVertical: 8,
		paddingVertical: 14,
		paddingHorizontal: 50,
		backgroundColor: '#cd5c5c',
	},
	btnText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});

export default SignUpForm;
