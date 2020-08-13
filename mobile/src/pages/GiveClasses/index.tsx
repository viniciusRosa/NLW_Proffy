import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';

// import landingImage from '../../assets/images/landing.png';
// import studyIcon from '../../assets/images/icons/study.png';
// import giveClassesIcon from '../../assets/images/icons/give-classes.png';
// import heartIcon from '../../assets/images/icons/heart.png';

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
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