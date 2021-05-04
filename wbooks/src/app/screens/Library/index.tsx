import React from 'react';
import { SafeAreaView } from 'react-native';
import BookList from '@components/BookList';

import styles from './styles';

function Library() {
  return (
    <SafeAreaView style={styles.container}>
      <BookList />
    </SafeAreaView>
  );
}

export default Library;
