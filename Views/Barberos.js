/* import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'; */
import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, ActivityIndicator, Alert  } from "react-native";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { ListItem, Avatar, Button} from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';

import { db } from '../database/firebase';
import { ListItemChevron } from "@rneui/base/dist/ListItem/ListItem.Chevron";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemTitle } from "@rneui/base/dist/ListItem/ListItem.Title";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";
const myImage = require('../img/logo.png')



const  Barberos= ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    //funcion que carga los usuarios desde firebase
    const getUsers = async () => {
        const dataColl = collection(db, "users");
        const docsDB = await getDocs(dataColl);

        const readUsers = []

        //arreglo local para guardar los usuarios que se
        //cargando en la base de datos
        docsDB.forEach((doc) => {
            //console.log(doc.data()); 
            const { name, email, phone } = doc.data();
            readUsers.push({
                id: doc.id,
                name,
                email,
                phone
            })
        })//fin del foreach

        //cambiamos el estado del arreglo de usuarios global
        //con el listado de usuairos cargando de la base de datos

        setUsers(readUsers);

        //indicamos que se termino la carga de usuarios
        setLoading(false);
    }//fin de getusers

    useEffect(() => {
        if (users.length > 0) return;
        setLoading(true);
        getUsers();
    }, [users])

    //funcion para eliminar el usuario
    async function onDelete(id, name){
        //console.log(id);
        Alert.alert(
            'Eliminar usuario',
            '¿Realmentedeseas eliminar el usaurio?' + name,
            [
                {
                    text: 'Ok',
                    onPress: async () => {
                        await deleteDoc(doc (db, "users", id));
                        //reinicializamos el arreglo de usuarios para que la app
                        //los vuelva a cargar de la base de datos
                        setUsers([]);
                    }
                },
                {
                text: 'Cancelar',
                style: 'destructive'
            }
            ],
            {cancelable: false}
        )
    }//fin de onDelete

    return (
        <View >
            
            {loading ? (
                <Text>Cargando usuarios....</Text>
            ) : (
                <ScrollView>
                    
                    {
                        users.map((user) => {
                            return (
                                <ListItem
                                    key={user.id}
                                    bottomDivider
                                    onPress={() => {
                                        navigation.navigate('UserDetail', {
                                            id: user.id
                                        });
                                    }}
                                >
                                    <ListItemChevron />
                                    <Avatar
                                        source={{
                                            uri: 'https://randomuser.me/api/portraits/men/52.jpg'
                                        }}
                                        rounded
                                    />
                                    <ListItemContent >
                                        <ListItemTitle>{user.name}</ListItemTitle>
                                        <ListItemSubtitle>{user.email}</ListItemSubtitle>
                                        <ListItemSubtitle>{user.phone}</ListItemSubtitle>
                                    </ListItemContent>
                                    <ListItemContent>
                                        <Button type= "clear"
                                        onPress={() =>{onDelete(user.id)}}>
                                            <Ionicons name = "trash-outline" size={25} color="black"/>
                                        </Button>
                                    </ListItemContent>
                                </ListItem>
                            )//return

                        }
                        )}
                        <Button
                        title="Agregar Barbero"
                        onPress={() => { navigation.navigate('CreateUser') }}>
                    </Button>
                </ScrollView>
            )}
        </View>
    )
}

export default Barberos
 /* const styles = StyleSheet.create({
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
}) */
/*
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

    textButon2: {
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
        marginBottom: 'auto',
    },
    button: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 40,
        color: 'gray',
    },
}); */


