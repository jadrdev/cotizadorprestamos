//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
export default function ResultadodelCalculo(props){
  const { capital, interest, meses, total, errorMessage } = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>
          <DataResult title={'Canridad Solicitada'} value={`${capital} €`} />
          <DataResult title={'Interes %'} value={`${interest} %`} />
          <DataResult title={'Plazos'} value={`${meses} meses`} />
          <DataResult title={'Pago mensual'} value={`${total.monthlyFee} meses`} />
          <DataResult title={'Total a pagar'} value={`${total.totalPlayable} €`} />

        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
);
}
function DataResult(props){
  const { title, value } = props;

 return (
 <View style={styles.value}>
  <Text>{title}</Text>
  <Text>{value}</Text>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    // eslint-disable-next-line prettier/prettier
    content:{
        marginHorizontal: 40,
    },
    boxResult:{
        padding: 30,
    },
    title : {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20
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