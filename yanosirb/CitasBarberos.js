import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const myImage = require('../img/logo.png')



export default function CitasBarberos({navigation}) {
    return (
        <View style={styles.contaier}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.text}>Lista Barberos</Text>
            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('AgregarCita')}>
                <Text >Lalo Mendez </Text>
                <Text >lalongas@gmail.com</Text>
                <Text >19 años</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('AgregarCita')}>
                <Text >David Bisbal </Text> 
                <Text >david@gmail.com</Text>
                <Text >20 años</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('AgregarCita')}>
                <Text >Natael Cano </Text>
                <Text >natalover@gmail.com</Text>
                <Text >21 años</Text>
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

    titulo: {
        fontSize: 40,
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
        height: 80,
        marginTop: 20,
        borderRadius: 30,
        color: '#000',
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
});


