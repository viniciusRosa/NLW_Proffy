import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

import backImg from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
	title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title })  => {

	const navigation = useNavigation()

	function handleGoBack() {
		navigation.navigate('Landing');
	}

	return (
	<View style={styles.container}>
		<View style={styles.topBar}>
			<BorderlessButton onPress={handleGoBack} >
				<Image source={backImg}  resizeMode='contain'/>
			</BorderlessButton>

			<Image source={logoImg}  resizeMode='contain'/>

		</View>

		<Text style={styles.title} > {title} </Text>
	</View>
	)
}

export default PageHeader;