import React from 'react';
import { View, StyleSheet } from 'react-native';

const NovenaInterfaz = () => {
    return (
    <View style={styles.container}>
    <View style={styles.fila}>
    <View style={[styles.caja, styles.cajaNaranja]} />
    <View style={[styles.caja, styles.cajaMorada]} />
    <View style={[styles.caja, styles.cajaCeleste]} />
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#1A2E3E', 
    justifyContent: 'center',
    alignItems: 'center',
    },


    fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 0,
    right: 0,
    width: 100,
    marginBottom: 0,
    },


    caja: {
    width: 100,
    height: 1000,
    borderWidth: 10,
    borderColor: '#FFFFFF', 
    },


    cajaMorada: {
    top: -10,
    right: 0,
    backgroundColor: '#5C4CFC', 
    },


    cajaNaranja: {
    width: 100,
    height: 1000,
    top: -10,
    right: 70,
    backgroundColor: '#FFA500', 
    },


    cajaCeleste: {
        top: -10,
        right: -70,
    backgroundColor: '#00FFFF', 
    },
    });

export default NovenaInterfaz;
