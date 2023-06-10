import React, { useLayoutEffect, useState } from "react";
import { Text, View, ActivityIndicator, Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "@rneui/base";

import { db } from '../database/firebase';
import { getDocs, doc, getDoc } from 'firebase/firestore';

const UserDetail = ({ navigation, route }) => {
    const { id } = route.params;

    const [isloading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const getUserById = async () => {
        const docRef = doc(db, "users", id);
        const docDB = await getDoc(docRef);
        setUser(docDB.data());
        const { name, email, phone } = docDB.data();
        setLoading(false);
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={() =>
                        navigation.navigate('EditarBar', { id, name, email, phone })
                    }
                    title="Editar"
                />
            ),
            title: name
        })
    }
    useLayoutEffect(() => {
        if (user === null) {
            getUserById();
        }
    })

    if (isloading) {
        return (
            <View>
                <ActivityIndicator />
                <Text>Cargando Barbero...</Text>
            </View>
        )
    }

    return (
        <View style={{backgroundColor: '#000'}}>
            <ListItem key={user.id}
                onPress={() => { navigation.navigate('UserList') }}>
                <ListItem.Chevron />
                <Avatar
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/52.jpg'
                    }}
                    rounded
                />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    )
}

export default UserDetail

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
});
