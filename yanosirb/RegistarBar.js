import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const myImage = require('../img/logo.png')


export default function RegistrarBar({navigation}) {
    return (
        <View style={styles.contaier}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.titulo}>Registrar barbero</Text>
            <Text style={styles.text}>Nombre</Text>
            <TextInput
                placeholder="" style={styles.textInput}
            />
            <Text style={styles.text}>Correo</Text>
            <TextInput
                placeholder="" style={styles.textInput}
            />
            <Text style={styles.text}>Edad</Text>
            <TextInput
                placeholder="" style={styles.textInput}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                placeholder="" style={styles.textInput}
                secureTextEntry={true}
            />
            <Text style={styles.text}>Confirmar Contraseña</Text>
            <TextInput
                placeholder="" style={styles.textInput}
                secureTextEntry={true}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Barberos')}>
                <Text style={styles.buttonText}>Agregar barbero </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 161,
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

    contaier: {
        flex: 1,
        backgroundColor: '#041B31',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
    },

    titulo: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },

    text: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 0,
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


