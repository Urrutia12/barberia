/* import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Barberos from './Barberos';
import ConfigBar from './ConfigBar';

const myImage = require('../img/logo.png')
const Tab = createBottomTabNavigator();

export default function Citas({ navigation }) {
    return (
        <View style={styles.contaier}>
            <Image source={myImage} style={styles.image} />
            <Text style={styles.text}>Citas</Text>
            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Erick Urrutia </Text>
                <Text >17/Mayo/2023</Text>
                <Text >19:00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Oscar Alberto </Text>
                <Text >17/Mayo/2023</Text>
                <Text >20:00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('StatusCita')}>
                <Text >Raul Porras </Text>
                <Text >18/Mayo/2023</Text>
                <Text >11:00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textButon} onPress={() => navigation.navigate('StatusCita')}>
                <Text>Abraham Davila</Text>
                <Text >18/Mayo/2023</Text>
                <Text >12:00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate ('CreateCita')}>       
            <Text style={styles.buttonText}>+</Text>             
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



const  Citas= ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const [citas, setCitas] = useState([]);

    //funcion que carga los usuarios desde firebase
    const getCitas = async () => {
        const dataColl = collection(db, "citas");
        const docsDB = await getDocs(dataColl);

        const readCitas = []

        //arreglo local para guardar los usuarios que se
        //cargando en la base de datos
        docsDB.forEach((doc) => {   
            //console.log(doc.data()); 
            const { names, date, nameb } = doc.data();
            readCitas.push({
                id: doc.id,
                names,
                date,
                nameb,
            })
        })//fin del foreach

        //cambiamos el estado del arreglo de usuarios global
        //con el listado de usuairos cargando de la base de datos

        setCitas(readCitas);

        //indicamos que se termino la carga de usuarios
        setLoading(false);
    }//fin de getusers

    useEffect(() => {
        /* if (citas.length > 0) return; */
        setLoading(true);
        getCitas();
    }, [])

    //funcion para eliminar el usuario
    async function onDelete(id, names) {
        Alert.alert(
          'Eliminar cita',
          `¿Realmente deseas eliminar la cita ${names}?`,
          [
            {
              text: 'Ok',
              onPress: async () => {
                await deleteDoc(doc(db, 'citas', id));
                // Volvemos a cargar las citas actualizadas después de eliminar el documento
                getCitas();
              },
            },
            {
              text: 'Cancelar',
              style: 'destructive',
            },
          ],
          { cancelable: false }
        );
      }
      
    return (
        <View >
            
            {loading ? (
                <Text>Cargando citas....</Text>
            ) : (
                <ScrollView>
                    
                    {
                        citas.map((cita) => {
                            return (
                                <ListItem style={{backgroundColor:'#041B31', color: '#041B31'}}
                                    key={cita.id}
                                    bottomDivider
                                    onPress={() => {
                                        navigation.navigate('', {
                                            id: cita.id
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
                                        <ListItemTitle>{cita.names}</ListItemTitle>
                                        <ListItemSubtitle>{cita.date}</ListItemSubtitle>
                                        <ListItemSubtitle>{cita.nameb}</ListItemSubtitle>
                                    </ListItemContent>
                                    <ListItemContent>
                                        <Button type= "clear"
                                        onPress={() =>{onDelete(cita.id)}}>
                                            <Ionicons name = "trash-outline" size={25} color="black"/>
                                        </Button>
                                    </ListItemContent>
                                </ListItem>
                            )//return

                        }
                        )}
                        <Button
                        title="Agregar Cita"
                        onPress={() => { navigation.navigate('CreateCita') }}>
                    </Button>
                </ScrollView>
            )}
        </View>
    )
}

export default Citas
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





