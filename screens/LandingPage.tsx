//react imports
import { Formik } from 'formik';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const LandingPage = ({ navigation }) => {
	return (
		<View style={styles.formContainer}>
			<Text>Welcome to the APPNAMEHERE</Text>
			<Text>Login in</Text>
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => {
					console.log(values);
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
								props.handleSubmit;
							}}
						/>
					</View>
				)}
			</Formik>
			<Button title='Sign Up' onPress={() => navigation.navigate('SignUpForm')} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	formContainer: {
		height: 300,
		width: 300,
		padding: 20,
		margin: 50,
		alignItems: 'stretch',
		borderColor: 'red',
		borderWidth: 1,
	},
	input: {
		height: 30,
		alignItems: 'stretch',
		backgroundColor: 'white',
		borderWidth: 3,
		borderColor: '#ddd',
		padding: 10,
		margin: 10,
		fontSize: 18,
		borderRadius: 6,
	},
});

export default LandingPage;
