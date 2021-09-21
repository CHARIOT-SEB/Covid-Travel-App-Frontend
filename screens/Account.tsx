import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyTrips from '../components/PastTrips';
import Logo from '../components/Logo';
import AccountInfo from '../components/AccountInfo';
import { Popover, Button, Spinner } from 'native-base';
import { dataStore } from '../providers/Data';
import {
	useFonts,
	Oxygen_300Light,
	Oxygen_400Regular,
	Oxygen_700Bold,
} from '@expo-google-fonts/oxygen';


const Account = (props) => {
	// const [popoverOpen, setPopoverOpen] = useState(false);
	const nav = props.navigation;
    const {setIsLoggedIn} = useContext(dataStore)

	const { isLoading, setIsLoading } = useContext(dataStore);

	const [fontsLoaded] = useFonts({
		Oxygen_300Light,
		Oxygen_400Regular,
		Oxygen_700Bold,
	});

	{
		if (isLoading || !fontsLoaded) return <Spinner color='#0aa33a' />;
	}


	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View style={{ alignItems: 'center' }}>
					<Logo />
				</View>
				<View style={styles.background}>
					<Text style={styles.myAccount}>My Account</Text>
					<AccountInfo />
					<MyTrips />
				</View>

				{/* {LOG OUT POPOVER} */}
				<View style={styles.background}>
					<Popover
						trigger={(triggerProps) => {
							return (
								<Button style={styles.button} {...triggerProps}>
									Log Out
								</Button>
							);
						}}
					>
						<Popover.Content accessibilityLabel='hello world' borderRadius={'xl'}>
							<Popover.Arrow />
							<Popover.CloseButton />
							<Popover.Header>Log out of this account</Popover.Header>
							<Popover.Body>Are you sure you want to continue?</Popover.Body>
							<Popover.Footer justifyContent='flex-end'>
								<Button.Group>
									<Button size='sm' variant='ghost'>
										Cancel
									</Button>
									<Button onPress={() => {
                                        setIsLoggedIn(false)
                                        nav.navigate('LandingPage')
                                        }} size='sm'>
										Log Out
									</Button>
								</Button.Group>
							</Popover.Footer>
						</Popover.Content>
					</Popover>
					{/* {DELETE ACCOUNT POPOVER} */}
					<Popover
						trigger={(triggerProps) => {
							return (
								<Button style={styles.button} {...triggerProps}>
									Delete Account
								</Button>
							);
						}}
					>
						<Popover.Content accessibilityLabel='hello world' borderRadius={'xl'}>
							<Popover.Arrow />
							<Popover.CloseButton />
							<Popover.Header>WARNING</Popover.Header>
							<Popover.Body>
								This action is irreversible, are you sure you want to continue?
							</Popover.Body>
							<Popover.Footer justifyContent='flex-end'>
								<Button.Group>
									<Button size='sm' variant='ghost'>
										Cancel
									</Button>
									<Button
										onPress={() => {
											nav.navigate('LandingPage');
										}}
										size='sm'
									>
										DELETE MY ACCOUNT
									</Button>
								</Button.Group>
							</Popover.Footer>
						</Popover.Content>
					</Popover>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#DCEFF9',
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		margin: 10,
		borderRadius: 15,
	},
	myAccount: {
		fontFamily: 'Oxygen_700Bold',
		textAlign: 'center',
		marginTop: 20,
		fontSize: 20,
		fontWeight: 'bold',
	},
	button: {
		backgroundColor: '#1D7253',
		alignSelf: 'center',
		margin: 20,
		padding: 15,
		textAlign: 'center',
		borderRadius: 15,
	},
});

export default Account;
