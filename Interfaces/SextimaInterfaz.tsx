import React from 'react';
import { View, StyleSheet } from 'react-native';

const SextimaInterfaz = () => {
    return (
    <View style={styles.container}>
    <View style={styles.fila}>
    <View style={[styles.caja, styles.cajaNaranja]} />
    <View style={[styles.caja, styles.cajaMorada]} />
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
    flexDirection: 'row',
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


    cajaMorada: {
    right: -140,
    top: -50,
    backgroundColor: '#5C4CFC', 
    },


    cajaNaranja: {
    width: 100,
    height: 100,
    top: 100,
    right: 140,
    backgroundColor: '#FFA500', 
    },


    cajaCeleste: {
    top: 100,
    backgroundColor: '#00FFFF', 
    },
    });

export default SextimaInterfaz;
