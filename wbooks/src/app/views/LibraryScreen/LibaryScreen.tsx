import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { libraryScreenStyle } from './libraryScreenStyle';

const LibaryScreen = () => {
  return (
    <SafeAreaView style={libraryScreenStyle.container}>
      <Text style={libraryScreenStyle.text}>Library Screen</Text>
    </SafeAreaView>
  );
};

export default LibaryScreen;
