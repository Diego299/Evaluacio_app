import React from 'react';
import { View, StyleSheet } from 'react-native';

const SegundaInterfaz = () => {
    return (
    <View style={styles.container}>
    <View style={styles.fila}>
    <View style={[styles.caja, styles.cajaMorado]} />
    <View style={[styles.caja, styles.cajaNaranja]} />
    <View style={styles.cajaCeleste} />
    </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1A2E3E',
    justifyContent: 'center',
    },


    fila: {
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: -240,
    },


    caja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#FFFFFF',
    },


    cajaCeleste: {
    width: 100,
    height: 100,
    backgroundColor: '#00FFFF',
    borderWidth: 10,
    borderColor: '#FFFFFF',
    },


    cajaNaranja: {
    backgroundColor: '#5C4CFC',
    },


    cajaMorado: {
    height: 850,
    backgroundColor: '#FFA500',
    },
});

export default SegundaInterfaz;
