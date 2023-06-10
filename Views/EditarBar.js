import React, {useState} from "react";
import { View, Button, TextInput, ScrollView, StyleSheet, Alert, Text} from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { RadioButton } from 'react-native-paper';

import { db } from '../database/firebase';

const EditarBar = ({navigation, route}) => {
    const {id, name, email, phone} = route.params;

    const [editName, setName] = useState(name);
    const [editEmail, setEmail] = useState(email);
    const [editPhone, setPhone] = useState(phone);

    /* const handleOptionChange = (option) => {
        setEstatus(option);
    }; */

    const EditarBars = async ()=>{
        if (editName === ''){
            Alert.alert(
                'Completar nombre',
                'Por favor introduce el nombre',
                [
                    {
                        text: 'Ok',
                        style: 'destructive'
                    },
                ],
                {cancelable: false} 
            )
        }

        else if (editEmail === ''){
            Alert.alert(
                    'Completar correo',
                    'Por favor introduce el correo electronico',
                    [
                        {
                            text: 'Ok',
                            style: 'destructive'
                        },
                    ],
                    {cancelable: false} 
                )
            }

            else if (editPhone === ''){
                Alert.alert(
                        'Completar telefono',
                        'Por favor introduce el telefono',
                        [
                            {
                                text: 'Ok',
                                style: 'destructive'
                            },
                        ],
                        {cancelable: false} 
                    )
                    }else {
                            await setDoc(
                                doc(db, "users", id),
                                {
                                    name: editName,
                                    email: editEmail,
                                    phone: editPhone
                                },
                                {
                                    merge: true
                                }
                            )
                            Alert.alert(
                                'Barbero actualizado',
                                'Barbero actualizado correctamente en la base de datos',
                                [
                                    {
                                        text: 'OK'
                                    },
                                ],
                                {cancelable: false}
                            )
                            navigation.navigate('Barberos')
                            }
        
    } //Fin del edit

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Nombre del Barbero'
                    onChangeText={text => setName(text)}
                    value={editName}
                />
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder='Correo del Barbero'
                    onChangeText={text => setEmail(text)}
                    value={editEmail} />
            </View>

            <View style={styles.inputGroup}>
                <TextInput placeholder='Telefono del usuario'
                    onChangeText={text => setPhone(text)}
                    value={editPhone} />
            </View>

            <View>
                <Button title="Guardar Cambios"
                    onPress={() => EditarBars()} />
            </View>
        </ScrollView>
    )
}

export default EditarBar;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'cccccc',
    },
    container1: {
        flex: 1,
        paddingHorizontal: 16,

    },

    textInput: {
        height: 32,
        borderColor: 'black',
        borderWidth: 1.5,
        borderRadius: 10,
        margin: 5,
        color: 'black',
        fontSize: 16,
        paddingHorizontal: 5,
    },

    titulos: {
        color: 'black',
        fontSize: 18,
        marginLeft: 5,
        marginTop: 10,
    },
    
});