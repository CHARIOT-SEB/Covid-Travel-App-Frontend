//react imports
import axios from 'axios';
import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Modal,
	TouchableOpacity,
	SafeAreaView,
	Image,
	ScrollView,
} from 'react-native';
import { useFonts, Oxygen_400Regular, Oxygen_700Bold } from '@expo-google-fonts/oxygen';
// screen imports
import { dataStore } from '../providers/Data';
import SignUpForm from '../screens/SignUpForm';
import { Spinner } from 'native-base';
const logo = require('../logo.png');

const LandingPage = () => {
	const [signUp, setSignUp] = useState(false);
	const { isLoggedIn, setIsLoggedIn, setUser } = useContext(dataStore);

	const loginUser = (loginDetails: any) => {
		loginDetails.email = loginDetails.email.toLowerCase();
		const URL = `https://covid-travel-app-21.herokuapp.com/api/users/${loginDetails.email}`;
		axios
			.post(URL, { password: loginDetails.password })
			.then((user: any) => {
				setUser(user.data.user);
				setIsLoggedIn(true);
			})
			.catch((error: object) => {});
	};

	if (isLoggedIn) return null;

	const [fontsLoaded] = useFonts({
		Oxygen_400Regular,
	});

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Spinner />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View>
					<Modal visible={signUp} animationType='slide'>
						<SignUpForm />
					</Modal>

					<View style={styles.logo}>
						<Image source={logo} style={{ width: 350, height: 150 }} />
					</View>

					<View>
						<Text style={styles.text}>Travel Safe</Text>
					</View>

					<Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {}}>
						{(props) => (
							<View>
								<View style={{ alignItems: 'center' }}>
									<TextInput
										style={styles.input}
										placeholder='   Email'
										onChangeText={props.handleChange('email')}
										value={props.values.email}
									/>

									<TextInput
										style={styles.input}
										placeholder='   Password'
										onChangeText={props.handleChange('password')}
										value={props.values.password}
										secureTextEntry
									/>
								</View>
								<View style={styles.loginBtn}>
									<TouchableOpacity
										style={styles.btn}
										onPress={() => {
											props.handleSubmit();
											loginUser(props.values);
										}}
									>
										<Text style={styles.btnText}> Log In </Text>
									</TouchableOpacity>
								</View>
							</View>
						)}
					</Formik>

					<View>
						<TouchableOpacity style={styles.btn} onPress={() => setSignUp(true)}>
							<Text style={styles.btnText}> Sign Up </Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#DCEFF9',
	},
	logo: {
		alignItems: 'center',
		marginBottom: 20,
	},
	input: {
		margin: 10,
		width: 280,
		height: 45,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#ddd',
		fontSize: 18,
		borderRadius: 10,
		paddingHorizontal: 10,
	},
	btn: {
		borderRadius: 10,
		marginVertical: 8,
		paddingVertical: 14,
		marginHorizontal: 35,
		backgroundColor: '#5c98c0',
	},
	btnText: {
		fontFamily: 'Oxygen_400Regular',
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
	loginBtn: {
		marginBottom: 100,
	},
	text: {
		textAlign: 'center',
		fontFamily: 'Oxygen_400Regular',
		fontSize: 18,
		marginBottom: 80,
		textTransform: 'uppercase',
		color: '#5c98c0',
	},
});

export default LandingPage;
