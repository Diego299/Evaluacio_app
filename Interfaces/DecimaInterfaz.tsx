import React from 'react';
import { View, StyleSheet } from 'react-native';

const DecimaInterfaz = () => {
    return (
    <View style={styles.container}>
    <View style={styles.fila}>
    <View style={[styles.caja, styles.cajaMorada]} />
    <View style={[styles.caja, styles.cajaNaranja]} />
    <View style={styles.cajaCeleste} />
    </View>
    </View>
    );
    };
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },


    fila: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 0,
    },


    caja: {
    width: 0,
    height: 0,
    borderWidth: 10,
    borderColor: '#FFFFFF', 
    },


    cajaCeleste: {
    flex: 2,
    backgroundColor: '#00FFFF',
    borderWidth: 10,
    borderColor: '#FFFFFF',
    },


    cajaMorada: {
    flex: 1,
    backgroundColor: '#5C4CFC',
    height: 80,
    width: 460,
    },


    cajaNaranja: {
    flex: 3,
    backgroundColor: '#FFA500',
    width: 460,
    },
    });

export default DecimaInterfaz;
