import React, { useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

	const [teachers, setTeachers] = useState([]);
	const [favorites, setFavorites] = useState<number[]>([]);
	const [subject, setSubject] = useState('');
	const [week_day, setWeekDay] = useState('');
	const [time, setTime] = useState('');

	const [isFiltersVisible, setIsFiltersVisible] = useState(false);

	function handleFilter() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	function loadFavorites() {
		AsyncStorage.getItem('favorites').then(response => {
			if (response) {
				const favoritedTeachers = JSON.parse(response);
				const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => {
					return teacher.id;
				})

				setFavorites(favoritedTeachersId);
			}
		});
	}

	useFocusEffect(() => {
		loadFavorites()
	})

	async function handleFilteredClasses() {
		loadFavorites();
		const response = await api.get('classes', {
			params: {
				subject,
				week_day,
				time
			}
		})
		setIsFiltersVisible(false);
		setTeachers(response.data);
		console.log(teachers);
	}


	return (
		<View style={styles.container}>
			<PageHeader
				title='Proffys disponíveis'
				headerRight={(
					<BorderlessButton onPress={handleFilter}>
						<Feather name='filter' size={20} color='#fff' />
					</BorderlessButton>
				)}>
				{isFiltersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
						<TextInput
							style={styles.input}
							value={subject}
							onChangeText={text => setSubject(text)}
							placeholder='Qual a matéria?'
						/>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
									style={styles.input}
									value={week_day}
									onChangeText={text => setWeekDay(text)}
									placeholder='Qual o dia?'
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
									style={styles.input}
									value={time}
									onChangeText={text => setTime(text)}
									placeholder='Qual o horário?'
								/>
							</View>
						</View>

						<RectButton onPress={handleFilteredClasses} style={styles.submitButton}>
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
				{
					teachers.map((teacher: Teacher) => {
						return (
							<TeacherItem
							 key={teacher.id}
							 teacher={teacher}
							 favorited={favorites.includes(teacher.id)}
							 />
						)
					})
				}
			</ScrollView>
		</View>
	)

}

export default TeacherList;