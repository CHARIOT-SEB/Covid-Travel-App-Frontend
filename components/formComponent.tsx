import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Container } from 'native-base';
import { dataStore } from '../providers/Data';

const userSchema = yup.object({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().min(4).max(10).required(),
	// can do a .matches(takes a regex for password rules)
	// can do a .test(takes 3 args, name of func, message to user, function to test input)
});
const formComponent = () => {
	const { setSignUp } = useContext(dataStore);
	const [user, setUser] = useState({
		name: 'Bob',
		email: 'bob@cat.com',
		password: 'ghj',
	});

	return (
		<Container>
			<View style={styles.formContainer}>
				<Formik
					initialValues={{ name: '', email: '', password: '' }}
					validationSchema={userSchema}
					onSubmit={(values, actions) => {
						setUser(values);
						actions.resetForm();
					}}
				>
					{(props) => (
						<View>
							<TextInput
								style={styles.input}
								placeholder='name'
								onChangeText={props.handleChange('name')}
								value={props.values.name}
								onBlur={props.handleBlur('name')}
							/>
							<Text style={styles.errorText}> {props.touched.name && props.errors.name} </Text>

							<TextInput
								style={styles.input}
								placeholder='email'
								onChangeText={props.handleChange('email')}
								value={props.values.email}
								onBlur={props.handleBlur('email')}
							/>
							<Text style={styles.errorText}> {props.touched.email && props.errors.email} </Text>
							<TextInput
								style={styles.input}
								placeholder='password'
								onChangeText={props.handleChange('password')}
								value={props.values.password}
								onBlur={props.handleBlur('password')}
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
				{console.log(user)}

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
		// flex: 1,
		// alignContent: 'center',
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

export default formComponent;
