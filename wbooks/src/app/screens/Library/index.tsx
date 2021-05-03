import CardBook from '@components/CardBook';
import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './styles';

function Library() {
  return (
    <SafeAreaView style={styles.container}>
      <CardBook title="A Little Bird Told Me" image={null} author="Timothy Cross" key={5} id={1} />
    </SafeAreaView>
  );
}

export default Library;
