import CardBook from '@components/CardBook';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import styles from './styles';

function Library() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Library Screen</Text>
      <Text style={styles.text}>Aquí iran las cards de libros proximamente</Text>
      <CardBook title="test Title" image={null} author="author" key={5} id={1} />
    </SafeAreaView>
  );
}

export default Library;
