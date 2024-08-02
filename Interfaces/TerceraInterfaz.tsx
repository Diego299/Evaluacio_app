import React from 'react';
import { View, StyleSheet } from 'react-native';

const TerceraInterfaz = () => {
    return (
    <View style={styles.container}>
    <View style={styles.fila}>
    <View style={[styles.caja, styles.cajaNaranja]} />
    <View style={[styles.caja, styles.cajaMorado]} />
    </View>
    <View style={styles.fila}>
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
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    width: 100,
    marginBottom: 0,
    },


    caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFFFFF', 
    },


    cajaMorado: {
    backgroundColor: '#5C4CFC',
    },


    cajaNaranja: {
    width: 100,
    height: 100,
    top: 0,
    right: -100,
    backgroundColor: '#FFA500',
    },


    cajaCeleste: {
    backgroundColor: '#00FFFF',
    },
    });

export default TerceraInterfaz;
