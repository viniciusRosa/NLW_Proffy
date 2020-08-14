import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favorites() {
	return (
		<View style={styles.container}>
			<PageHeader title='Meus Proffys favoritos' />
		</View>
	)
}

export default Favorites;