import React, { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Alert, SafeAreaView, Text } from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { Button } from 'react-native-paper';

import { db } from '../database/firebase';


const CreateUser = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const SaveNewUser = async () => {
        if (name === '') {
            Alert.alert(
                'Completar nombre',
                'Por favor introduce el nombre',
                [
                    {
                        text: 'Ok',
                        style: 'destructive'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
        }//fin del name ===

        else if (email === '') {
            Alert.alert(
                'Completar email',
                'Por favor introduce el email',
                [
                    {
                        text: 'Ok',
                        style: 'destructive'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
        }//fin del email ===

        else if (phone === '') {
            Alert.alert(
                'Completar telefono',
                'Por favor introduce el telefono',
                [
                    {
                        text: 'Ok',
                        style: 'destructive'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
        }//fin del phone ===

        else {
            const dataColl = collection(db, "users");
            const users = await addDoc(dataColl, {
                name: name,
                email: email,
                phone: phone
            })
            Alert.alert(
                'Usuario agregado',
                'Usuario agregado correctamente a la base de datos',
                [
                    {
                        text: 'Ok'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
            navigation.navigate('Barberos')
        }

    }//fin saveuser


    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.from}>
                <Text style={styles.titulos}>
                    Nombre
                </Text>
                <TextInput onChangeText={text => setName(text)}
                    style={styles.textInput}
                    value={name}
                />
                <Text style={styles.titulos}>
                    Correo
                </Text>
                <TextInput onChangeText={text => setEmail(text)}
                    style={styles.textInput}
                    value={email}
                />
                <Text style={styles.titulos}>
                    Telefono
                </Text>
                <TextInput onChangeText={text => setPhone(text)}
                    style={styles.textInput}
                    value={phone}
                />
                <Button
                    style={{
                        marginHorizontal: 5,
                        marginVertical: 40,
                        backgroundColor: '#000000',
                        color: 'white',
                    }}
                    mode="contained"
                    onPress={() => SaveNewUser()}
                >
                    Agregar Barbero
                </Button>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#041B31',
    },

    from: {
        paddingHorizontal: 16,
        
    },

    textInput: {

        height: 32,
        borderColor: 'gray',
        borderWidth: 1.5,
        borderRadius: 10,
        backgroundColor: '#fff',
        margin: 5,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 5,
    },

    titulos: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 10,
    },
}
)

export default CreateUser