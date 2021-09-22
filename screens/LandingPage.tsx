//react imports
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
	const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
	const { isLoggedIn, setIsLoggedIn, setSignUp, signUp } = useContext(dataStore);

	console.log(isLoggedIn, 'Logged In?');

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
				<View style={styles.login}>
					<Formik
						initialValues={{ email: '', password: '' }}
						onSubmit={(values) => {
							setLoginInfo(values);
							console.log(loginInfo);
						}}
					>
						{(props) => (
							<View>
								<TextInput
									style={styles.input}
									placeholder=' Email'
									onChangeText={props.handleChange('email')}
									value={props.values.email}
								/>

								<TextInput
									style={styles.input}
									placeholder=' Password'
									onChangeText={props.handleChange('password')}
									value={props.values.password}
									secureTextEntry
								/>
								{/* {old button} */}
								{/* <Button title='Log In' color='red' onPress={props.submitForm} /> */}
								<TouchableOpacity style={styles.btn} onPress={props.submitForm}>
									<Text style={styles.btnText}>Log In</Text>
								</TouchableOpacity>
							</View>
						)}
					</Formik>
					{/* <Button title='Sign Up' onPress={() => setSignUp(true)} /> */}
					<TouchableOpacity style={styles.btn} onPress={() => setSignUp(true)}>
						<Text style={styles.btnText}>Sign Up</Text>
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
	},
	login: {
		top: 200,
	},
	input: {
		width: 300,
		height: 40,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#ddd',
		fontSize: 18,
		borderRadius: 10,
		margin: 10,
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
