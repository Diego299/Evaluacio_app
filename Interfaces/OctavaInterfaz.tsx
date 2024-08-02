import React from 'react';
import { View, StyleSheet } from 'react-native';

const OctavaInterfaz = () => {
    return (
        <View style={styles.container}>
        <View style={styles.fila}>
        <View style={[styles.caja, styles.cajaMorada]} />
        <View style={[styles.caja, styles.cajaNaranja]} />
        <View style={styles.fila}>
        <View style={styles.cajaCeleste}/>
        </View>
        </View>
        </View>
        );
        };
        
        const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#1A2E3E', 
        justifyContent: 'center',
        alignItems: 'center',
        },


        fila: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 200,
        width: 100,
        marginBottom: 0,
        },


        caja: {
        width: 0,
        height: 0,
        borderWidth: 10,
        borderColor: '#FFFFFF', 
        },
    
    
        cajaCeleste: {
        width: 100,
        height: 100,
        top: 300,
        right: -180,
        backgroundColor: '#00FFFF',
        borderWidth: 10,
        borderColor: '#FFFFFF', 
        },
    
    
        cajaMorada: {
        width: 100,
        height: 100,
        top: -400,
        right: 180,
        backgroundColor: '#5C4CFC', 
        },
    
    
        cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#FFA500',
        },
        });

export default OctavaInterfaz;
