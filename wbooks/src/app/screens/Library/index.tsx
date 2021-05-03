import React from 'react';
import { SafeAreaView } from 'react-native';
import FlatListHome from '@components/FlatListHome';

import styles from './styles';

function Library() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatListHome />
    </SafeAreaView>
  );
}

export default Library;
