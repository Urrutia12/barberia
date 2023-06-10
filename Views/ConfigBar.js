import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const myImage = require('../img/logo.png')


export default function ConfigBar({navigation}) {
    return (
        <View style={styles.contaier}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.titulo}>Configuracion</Text>
            
            {/* <TouchableOpacity onPress={() => navigation.navigate('')}>
                <Text style={styles.buttonText}>Cambiar Contraseña </Text>
            </TouchableOpacity>
 */}
            <TouchableOpacity style= {styles.buttonText2} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Cerrar Sesion </Text>
            </TouchableOpacity>

            
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 261,
    },

    buttonText: {
        borderWidth: 1,
        backgroundColor: '#000000',
        color: 'white',
        borderColor: '#FFFFFF',
        paddingStart: 20,
        padding: 10,
        width: '100%',
        height: 40,
        marginTop: 30,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 'auto'
    },

    buttonText2: {
        marginBottom: 'auto'
    },

    contaier: {
        flex: 1,
        backgroundColor: '#041B31',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
    },

    titulo: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
    },

    text: {
        fontSize: 20,
        color: '#fff',
    },

    textInput: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'gray',
        paddingStart: 30,
        padding: 10,
        width: '80%',
        height: 40,
        marginTop: 20,
        borderRadius: 30,
        color: '#000',
    },
});


