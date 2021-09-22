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
// screen imports
import { dataStore } from '../providers/Data';
import SignUpForm from '../screens/SignUpForm';
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
		marginBottom: 100,
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
	},
	btn: {
		borderRadius: 10,
		marginVertical: 8,
		paddingVertical: 14,
		marginHorizontal: 35,
		backgroundColor: '#5c98c0',
	},
	btnText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
	loginBtn: {
		marginBottom: 100,
	},
});

export default LandingPage;
