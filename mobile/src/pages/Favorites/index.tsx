import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
	return (
		<View style={styles.container}>
			<PageHeader title='Meus Proffys favoritos' />

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: '3%',
					paddingBottom: '3%'
				}}
			>
				<TeacherItem />
				<TeacherItem />
			</ScrollView>

		</View>
	)
}

export default Favorites;