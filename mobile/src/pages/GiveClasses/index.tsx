import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {

	const navigation = useNavigation();

	function handleNavigateBack() {
		navigation.goBack();
	}

	return (

		<View style={styles.container}>
			<ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>

				<Text style={styles.title}>Quer ser um Proffy? </Text>
				<Text style={styles.description}>Para começar, voçê precisa se cadastrar na nossa plataforma web.</Text>
			</ImageBackground>

			<RectButton onPress={handleNavigateBack} style={styles.okButton}>
				<Text style={styles.okButtonText}>Tudo bem</Text>
			</RectButton>
		</View>
	);

}

export default GiveClasses;