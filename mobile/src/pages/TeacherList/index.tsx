import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

function TeacherList() {

	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	function handleFilter() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	return (
		<View style={styles.container}>
			<PageHeader 
				title='Proffys disponíveis' 
				headerRight={(
					<BorderlessButton onPress={handleFilter}>
						<Feather name='filter' size={20} color='#fff'/>
					</BorderlessButton>
				)}>
				{ isFiltersVisible && (
				<View style={styles.searchForm}>
					<Text style={styles.label}>Matéria</Text>
					<TextInput
						style={styles.input}
						placeholder='Qual a matéria?' 
					/>

					<View style={styles.inputGroup}>
						<View style={styles.inputBlock}>
							<Text style={styles.label}>Dia da semana</Text>
							<TextInput
								style={styles.input}
								placeholder='Qual o dia?' 
							/>
						</View>

						<View style={styles.inputBlock}>
							<Text style={styles.label}>Horário</Text>
							<TextInput
								style={styles.input}
								placeholder='Qual o horário?' 
							/>
						</View>
					</View>

					<RectButton style={styles.submitButton}>
						<Text style={styles.submitButtonText}>Filtrar</Text>
					</RectButton>

				</View>
				)}
			</PageHeader> 

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

export default TeacherList;