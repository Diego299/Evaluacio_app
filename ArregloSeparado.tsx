import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ArregloSeparado = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [pares, Pares] = useState<number[]>([]);
    const [impares, Impares] = useState<number[]>([]);
    const [clasificado, Clasificado] = useState(false);

    const clasificarNumeros = () => {
    const numerosPares = numeros.filter(num => num % 2 === 0);
    const numerosImpares = numeros.filter(num => num % 2 !== 0);
    
    Pares(numerosPares);
    Impares(numerosImpares);
    Clasificado(true);
    };

    return (
    <View style={styles.container}>
    <Text style={styles.titulo}>BIENVENIDO MUNDO CRUEL</Text>
    <Text style={styles.vector}>Vector: {numeros.join(', ')}</Text>


    {/*El TouchableOpacity sirve para crear areas tactiles en este caso
    se ocupo para el boton de clasificar */}
    
    <TouchableOpacity style={styles.button} onPress={clasificarNumeros}>
    <Text style={styles.buttondeTexto}>CLASIFICAR</Text>
    </TouchableOpacity>


    {/* En este caso && este se utiliza para realizar opperaciones Logicas*/}
    {clasificado && (
    <View style={styles.resultado}>
    <Text style={styles.resultado1}>Pares: {pares.join(', ')}</Text>
    <Text style={styles.resultado2}>Impares: {impares.join(', ')}</Text>
    </View>
    )}
    </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },


    titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },


    vector: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    },


    button: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    },


    buttondeTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    },


    resultado: {
    marginTop: 20,
    },


    resultado1: {
    fontSize: 16,
    marginBottom: 10,
    },

    resultado2: {
        fontSize: 16,
        marginBottom: 10,
        },
    });

export default ArregloSeparado;
