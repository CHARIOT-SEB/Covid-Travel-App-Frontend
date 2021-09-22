//react imports
import axios from 'axios';
import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput,
	Modal,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native';
// screen imports
import { dataStore } from '../providers/Data';
import SignUpForm from '../screens/SignUpForm';
import Logo from '../components/Logo';

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
			<View>
				<Modal visible={signUp} animationType='slide'>
					<SignUpForm />
				</Modal>

				<View style={styles.logo}>
					<Logo />
				</View>

				<Text style={{ textAlign: 'center' }}>Log In </Text>
				<Formik initialValues={{ email: '', password: '' }} onSubmit={(values) => {}}>
					{(props) => (
						<View>
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

							<View>
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
		marginBottom: 150,
	},
	input: {
		margin: 10,
		width: 280,
		height: 40,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#ddd',
		fontSize: 18,
		borderRadius: 10,
	},
	btn: {
		borderRadius: 8,
		marginVertical: 8,
		paddingVertical: 14,
		paddingHorizontal: 10,
		backgroundColor: '#5c98c0',
	},
	btnText: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		fontSize: 16,
		textAlign: 'center',
	},
});

export default LandingPage;
