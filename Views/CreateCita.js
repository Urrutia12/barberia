import React, { useState, useEffect } from "react";
import { View, TextInput, ScrollView, StyleSheet, Alert, SafeAreaView, Text } from "react-native";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Button } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'

import { db } from '../database/firebase';


const CreateCita = ({ navigation }) => {

    const [names, setNames] = useState('');
    const [date, setDate] = useState('');
    const [nameb, setNameBar] = useState('');
    const [barberos, setBarberos] = useState([]);
    const [opcionesDropdown, setOpcionesDropdown] = useState([]);
    const getBarberos = async () => {
        const dataColl = collection(db, "users");
        const docsDB = await getDocs(dataColl);
        const readBarberos = [];
        docsDB.forEach((doc) => {
            const { name } = doc.data();
            readBarberos.push(name);
        });
        setBarberos(readBarberos);
    };
    const obtenerOpcionesDropdown = () => {
        const arregloModificado = barberos.map((elemento) => {
            if (elemento) {
                return elemento.trim();
            } else {
                return 'No jala';
            }
        });
        setOpcionesDropdown(arregloModificado);
    };

    useEffect(() => {
        getBarberos();
    }, []);

    useEffect(() => {
        if (barberos.length > 0) {
            obtenerOpcionesDropdown();
        }
    }, [barberos]);
    const SaveNewCita = async () => {
        if (names === '') {
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
        }//fin del names ===

        else if (date === '') {
            Alert.alert(
                'Completar la fecha',
                'Por favor introduce la fecha',
                [
                    {
                        text: 'Ok',
                        style: 'destructive'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
        }//fin del fecha ===

        else if (nameb === '') {
            Alert.alert(
                'Completar nombre barbero',
                'Por favor introduce el nombre del barbero',
                [
                    {
                        text: 'Ok',
                        style: 'destructive'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
        }//fin del namebarbero ===

        else {
            const dataColl = collection(db, "citas");
            const citas = await addDoc(dataColl, {
                names: names,
                date: date,
                nameb: nameb
            })
            Alert.alert(
                'Cita ha sido agregada',
                'La cita ha sido agregada correctamente a la base de datos',
                [
                    {
                        text: 'Ok'
                    },
                ],
                { cancelable: false } //Esto solo funciona para android, para que no cierre 
                //La alerta si se presiona fuera de la alerta
            )
            navigation.navigate('Citas')
        }

    }//fin saveuser


    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.from}>
                <Text style={styles.titulos}>
                    Nombre
                </Text>
                <TextInput onChangeText={text => setNames(text)}
                    style={styles.textInput}
                    value={names}
                />
                <Text style={styles.titulos}>
                    fecha
                </Text>
                <TextInput onChangeText={text => setDate(text)}
                    style={styles.textInput}
                    value={date}
                />
                <Text style={styles.titulos}>
                   Nombre Barbero
                </Text>
                {opcionesDropdown.length > 0 ? (
                    <View>
                        <SelectDropdown
                            buttonStyle={{ 
                                width: '100%',
                            }}
                            data={opcionesDropdown}
                            defaultButtonText="Selecciona un barbero"
                            onSelect={(selectedItem, index) => {
                                setNameBar(selectedItem)
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                        />
                    </View>
                ) : (
                    <Text style={styles.titulos}>
                        Cargando
                    </Text>
                )}
                <Button
                    style={{
                        marginHorizontal: 5,
                        marginVertical: 40,
                        backgroundColor: '#000000',
                        color: 'white',
                    }}
                    mode="contained"
                    onPress={() => SaveNewCita()}
                >
                    Agregar Cita
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

export default CreateCita