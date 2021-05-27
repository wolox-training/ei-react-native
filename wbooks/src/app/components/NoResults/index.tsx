import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function NoneResult() {
  return (
    <View style={styles.container}>
      <Text>No Results</Text>
    </View>
  );
}
