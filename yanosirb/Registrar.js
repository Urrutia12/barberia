/* import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
const myImage = require('../img/logo.png')


export default function Registrar({ navigation }) {
  return (
    <View style={styles.contaier}>
      <Image source={myImage} style={styles.image} />
      <Text style={styles.titulo}>Registrarse</Text>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        placeholder="" style={styles.textInput}
      />
      <Text style={styles.text}>Correo</Text>
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Ya tengo cuenta </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
          <Text style={styles.buttonResg}>Registrarse</Text>
        </TouchableOpacity>
      </View>


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
    height: 40,
    marginTop: 20,
    borderRadius: 30,
    color: '#000',
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

  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 'auto'


  },

  buttonResg: {
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
  },  
});


 */