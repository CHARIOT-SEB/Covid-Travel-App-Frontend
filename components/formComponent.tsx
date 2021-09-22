import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container } from 'native-base';
import { dataStore } from '../providers/Data';
import { postNewAccount } from '../screens/api';

const userSchema = yup.object({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().min(4).max(10).required(),
	// can do a .matches(takes a regex for password rules)
	// can do a .test(takes 3 args, name of func, message to user, function to test input)
});
const formComponent = (props: any) => {
	const nav = props.navigation;
	const { setSignUp, setUser, user, setLoginInfo, setIsLoggedIn } = useContext(dataStore);

	useEffect(() => {
		postNewAccount(user).then((data) => {
			setLoginInfo(data);
			setIsLoggedIn(true);
		});
	}, [user]);

	return (
		<Container>
			<View style={styles.formContainer}>
				<Text>Join now!</Text>
				<Formik
					initialValues={{ name: '', email: '', password: '' }}
					validationSchema={userSchema}
					onSubmit={(values, actions) => {
						setUser(values);
						console.log(user);
						actions.resetForm();
						setSignUp(false);
					}}
				>
					{(props) => (
						<View>
							<Text>Name</Text>
							<TextInput
								style={styles.input}
								placeholder='Name'
								onChangeText={props.handleChange('name')}
								value={props.values.name}
								onBlur={props.handleBlur('name')}
							/>
							<Text style={styles.errorText}> {props.touched.name && props.errors.name} </Text>
							
							<Text>Email</Text>
							<TextInput
								style={styles.input}
								placeholder='Email'
								onChangeText={props.handleChange('email')}
								value={props.values.email}
								onBlur={props.handleBlur('email')}
							/>
							<Text style={styles.errorText}> {props.touched.email && props.errors.email} </Text>
							
							<Text>Password</Text>
							<TextInput
								style={styles.input}
								placeholder='Password'
								onChangeText={props.handleChange('password')}
								value={props.values.password}
								onBlur={props.handleBlur('password')}
								secureTextEntry
							/>
							<Text style={styles.errorText}>
								{props.touched.password && props.errors.password}
							</Text>

							<TouchableOpacity
								style={styles.btn}
								onPress={() => {
									props.handleSubmit();
								}}
							>
								<Text style={styles.btnText}>Sign Up</Text>
							</TouchableOpacity>
						</View>
					)}
				</Formik>
				<View>
					<TouchableOpacity style={styles.btn} onPress={() => setSignUp(false)}>
						<Text style={styles.btnText}> Back </Text>
					</TouchableOpacity>
				</View>
			</View>
		</Container>
	);
};

const styles = StyleSheet.create({
	formContainer: {
		alignItems: 'center',
		// borderWidth: 3,
		// borderColor: 'black',
		// borderRadius: 6,
	},
	input: {
		width: 300,
		height: 40,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: '#ddd',
		fontSize: 18,
		borderRadius: 10,
	},
	errorText: {
		color: 'crimson',
		fontWeight: 'bold',
		marginBottom: 3,
		marginTop: 3,
		textAlign: 'center',
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

export default formComponent;
