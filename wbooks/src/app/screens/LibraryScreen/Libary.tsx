import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { styles } from './styles';

function Libary() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Library Screen</Text>
      <Text style={styles.text}>Aquí iran las cards de libros proximamente</Text>
    </SafeAreaView>
  );
}

export default Libary;
