import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  YellowBox,
} from 'react-native';
import ResultadodelCalculo from './src/components/ResultadodelCalculo';
import Footer from './src/components/Footer';
import Form from './src/components/Form';
import colors from './src/utils/colors.js';

YellowBox.ignoreWarnings(['Picker has benn extracted']);

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (capital && interest & meses) calcular();
    else reset();
  }, [capital, interest, meses]);

  const calcular = () => {
    reset();
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interest) {
      setErrorMessage("Te faltas los intereses");
    } else if (!meses) {
      setErrorMessage("No se ha selecionado ningún mes")
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPlayable: (fee * meses).toFixed(2).replace('.', ','),
      });
    }
  };
  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  }

  return (
 <>
    <StatusBar barStyle="light-content" />
      <View style={styles.background} />
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Cotizador de Prestamos </Text>
      <Form 
      setCapital={setCapital}
      setInteres={setInteres}
      setMeses={setMeses}
      />
    </SafeAreaView>
    <ResultadodelCalculo 
    errorMessage={errorMessage}
    capital={capital}
    interest={interest}
    meses={meses}
    total={total} 
    />
    <Footer calcular ={calcular} />

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#fff',
  },
});