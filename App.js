/* import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Views/Login';
import Registrar from './Views/Registrar';
import Citas from './Views/Citas';
import StatusCita from './Views/StatusCita';
import Barberos from './Views/Barberos';
import RegistrarBar from './Views/RegistarBar';
import EditarBar from './Views/EditarBar';
import ConfigBar from './Views/ConfigBar';
import ContraBar from './Views/ContraBar';
import CitasBarberos from './Views/CitasBarberos';
import AgregarCita from './Views/AgregarCita';
import CreateUser from './Views/CreateUser';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function StackCitas() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Citass' component={Citas} options={{ headerShown: false }} />
      <Stack.Screen name='StatusCita' component={StatusCita} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function StackBarberos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Barbeross' component={Barberos} options={{ headerShown: false }} />
      <Stack.Screen name='CreateUser' component={CreateUser} options={{ headerShown: false }} />
      <Stack.Screen name='EditarBar' component={EditarBar} options={{ headerShown: false }} />
      <Stack.Screen name='RegistrarBar' component={RegistrarBar} options={{ headerShown: false }} />
    </Stack.Navigator>
  )

}


function StackConfigBar() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ConfigBar' component={ConfigBar} options={{ headerShown: false }} />
      <Stack.Screen name='ContraBar' component={ContraBar} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  )

}

function StackTab() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Barberos" component={StackBarberos} options={{ headerShown: false }} />
      <Tab.Screen name="Citas" component={StackCitas} options={{ headerShown: false }} />
      <Tab.Screen name="Configuracion" component={StackConfigBar} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default function App() {
    return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
           <Stack.Screen name='Registrar' component={Registrar} options={{ headerShown: false }} /> 
          <Stack.Screen name="Opciones" component={StackTab} options={{ headerShown: false }} />

        </Stack.Navigator>
      </NavigationContainer>
    );

  }


const styles = StyleSheet.create({
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
  image: {
    width: 200,
    height: 261,

  },
  contaier: {
    flex: 1,
    backgroundColor: '#041B31',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },

  textInput: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    paddingStart: 30,
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
  },

  contraseñaolv: {
    fontSize: 14,
    color: 'white',
    marginTop: 20,
  }
});

 */



import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Views/Login';
import Citas from './Views/Citas';
import Barberos from './Views/Barberos';
import EditarBar from './Views/EditarBar';
import ConfigBar from './Views/ConfigBar';
import CreateUser from './Views/CreateUser';
import CreateCita from './Views/CreateCita';
import UserDetail from './Views/UserDetail';


const Stack = createNativeStackNavigator();
const  LibraryStack = createBottomTabNavigator();


function LibraryStackScreen() {
  return (
        <LibraryStack.Navigator 
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#041B31',
            },
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#ffff',
          }}
        >
          
          <LibraryStack.Screen
            name="Barberos"
            component={Barberos}
            options={{title: 'Barberos'}}/>

          <LibraryStack.Screen
            name="Citas"
            component={Citas}
            options={{title: 'Citas'}}/>

          <LibraryStack.Screen
            name="Configuracion"
            component={ConfigBar}
            options={{ headerShown: false }}
          />

        </LibraryStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Login' component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name ='Opciones' component={LibraryStackScreen} options={{ headerShown: false }}/>
        <Stack.Screen name ='CreateUser' component={CreateUser} options={{title: 'Agregar Barbero'}}/>
        <Stack.Screen name ='CreateCita' component={CreateCita} options={{title: 'Agregar Cita'}}/>
        <Stack.Screen name ='UserDetail' component={UserDetail} options={{title: 'Detalle Barbero'}}/>
        <Stack.Screen name ='EditarBar' component={EditarBar} options={{title: 'Editar Barbero'}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}