//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default function ResultadodelCalculo(props){
    const {capital, interest, meses, total, errorMessage} = props;
    return (
        <>
        <View style={styles.content}>
            {total && 
            (
                <View style={styles.boxResult}>
                    <DataResult title={"Canridad Solicitada"} value={capital}>
                    <DataResult title={"Canridad Solicitada"} value={capital}>
                    <DataResult title={"Canridad Solicitada"} value={capital}>
                </View>
            )
            }
        </View>
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </>
    );
}


function DataResult(props){
    const {title, value} = props;

    return (
        <View style={styles.value}>
                        <Text>{title}</Text>
                        <Text>{value}</Text>
                    </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    content:{
        marginHorizontal: 40,
    },
    boxResult:{
        padding: 30,
    },
    title : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30
            },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
});