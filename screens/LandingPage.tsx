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
    const {isLoggedIn, setIsLoggedIn, setUser} = useContext(dataStore);

    const loginUser = (loginDetails: any) => {
        loginDetails.email = loginDetails.email.toLowerCase()
        const URL = `https://covid-travel-app-21.herokuapp.com/api/users/${loginDetails.email}`;
        axios.post(URL, {password: loginDetails.password})
            .then((user: any) => {
                setUser(user.data);
                setIsLoggedIn(true);
            })
            .catch((error: object) => {

            })
    }

    if(isLoggedIn) return null;

	return (
		<View style={styles.formContainer}>
			<Modal visible={signUp} animationType='slide'>
				<SignUpForm />
				<Button title='Return to Login Page' onPress={() => setSignUp(false)} />
			</Modal>
			<Text>Welcome to the APPNAMEHERE</Text>
			<Text>Login in</Text>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => {
				}}
			>
				{(props) => (
					<View>
						<TextInput
							style={styles.input}
							placeholder='email'
							onChangeText={props.handleChange('email')}
							value={props.values.email}
						/>

						<TextInput
							style={styles.input}
							placeholder='password'
							onChangeText={props.handleChange('password')}
							value={props.values.password}
							secureTextEntry
						/>
						<Button
							title='submit'
							color='red'
							onPress={() => {
								props.handleSubmit();
                loginUser(props.values)
							}}
						/>
					</View>
				)}
			</Formik>
			<Button title='Sign Up' onPress={() => setSignUp(true)} />
		</View>
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
