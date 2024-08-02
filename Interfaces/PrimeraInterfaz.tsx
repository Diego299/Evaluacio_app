import React from 'react';
import { View, StyleSheet } from 'react-native';

const PrimeraInterfaz = () => {
    return (
    <View style={styles.container}>
    <View style={styles.column}>
    <View style={[styles.caja, styles.cajaMorado]} />
    <View style={[styles.caja, styles.cajaNaranja]} />
    <View style={[styles.caja, styles.cajaCeleste]} />
    </View>
    </View>
    );
    };

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1A2E3E', 
    justifyContent: 'center',
    alignItems: 'flex-end', 
    },


    column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF', 
    },


    caja: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: '#FFFFFF', 
    },


    cajaMorado: {
    backgroundColor: '#5C4CFC', 
    },


    cajaNaranja: {
    backgroundColor: '#FFA500', 
    },


    cajaCeleste: {
    backgroundColor: '#00FFFF', 
    },
    });

export default PrimeraInterfaz;
