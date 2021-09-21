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
		<SafeAreaView>
			<View >
				<Modal visible={signUp} animationType='slide'>
					<SignUpForm />
					{/* <Button title='Return to Login Page' onPress={() => setSignUp(false)} /> */}
				</Modal>
				<Logo />
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
							<Button title='Log In' color='red' onPress={props.submitForm} />
						</View>
					)}
				</Formik>
				<Button title='Sign Up' onPress={() => setSignUp(true)} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DCEFF9',
		alignItems: 'center',
	},
	input: {
		height: 30,
		backgroundColor: 'white',
		borderColor: '#ddd',
		margin: 10,
		fontSize: 18,
		borderRadius: 6,
	},
	btn: {
		backgroundColor: '#cd5c5c',
		borderRadius: 8,
		marginVertical: 8,
		paddingVertical: 14,
		paddingHorizontal: 10,
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
