import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const myImage = require('../img/logo.png')


export default function StatusCita ({navigation}) {
    return (
        <View style={styles.contaier}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.text}> Status Cita</Text>
            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Erick Urrutia </Text>
                <Text >17/Mayo/2023</Text>
                <Text >19:00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('Citass')}>
                <Text >Regresar </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Aceptar </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Rechazar </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonText} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Terminada </Text>
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 261,

    },
    contaier: {
        flex: 1,
        backgroundColor: '#041B31',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
    },

    text: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 0,
    },

    textButon: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'gray',
        paddingStart: 30,
        padding: 10,
        width: '80%',
        height: 80,
        marginTop: 10,
        borderRadius: 30,
        color: 'gray',
    },


    buttonText: {
        borderWidth: 1,
        backgroundColor: '#fff',
        color: 'black',
        borderColor: '#FFFFFF',
        paddingStart: 10,
        padding: 15,
        width: '50%',
        height: 50,
        marginTop: 30,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 'auto'
    },
});


