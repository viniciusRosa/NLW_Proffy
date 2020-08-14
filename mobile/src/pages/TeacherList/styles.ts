import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    
},

teacherList: {
    marginTop: '-13%',
},

searchForm: {
    marginBottom: '5%'
},

label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',

},

input: {
    height: 42,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: '1%',
    marginBottom: '2%'
},

inputGroup: {
    flexDirection: 'row',
    justifyContent: "space-between",
},

inputBlock: {
    width: '48%'
},

submitButton:{
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',

},

submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
}

});

export default styles;