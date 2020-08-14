import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'


const TeacherItem = () => {

	return (
		<View style={styles.container}>
			<View style={styles.profile} >
				<Image
					style={styles.avatar}
					source={{ uri: '' }}
					/>

					<View style={styles.profileInfo} >
						<Text style={styles.name}>vini</Text>
						<Text style={styles.subject}>materia</Text>
					</View>
			</View>

			<Text style={styles.bio}>
				biografia
			</Text>

			<View style={styles.footer} >
				<Text style={styles.price}>
					Preço/Hora {' '}
					<Text style={styles.priceValue}>R$20,00</Text>
				</Text>

				<View style={styles.buttonContainer}>
					<RectButton style={styles.favoriteButton}>
						<Image source={heartOutLineIcon} />
					</RectButton>

					<RectButton style={styles.contactButton}>
						<Image source={whatsappIcon} />
						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>
				</View>
			</View>
		</View>
	)
}

export default TeacherItem;