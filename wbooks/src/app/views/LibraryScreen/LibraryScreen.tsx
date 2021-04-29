import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { libraryScreenStyles } from './LibraryScreenStyle';

const LibaryScreen = () => {
  return (
    <SafeAreaView style={libraryScreenStyles.container}>
      <Text style={libraryScreenStyles.text}>Library Screen</Text>
      <Text style={libraryScreenStyles.text}>Aquí iran las cards de libros proximamente</Text>
    </SafeAreaView>
  );
};

export default LibaryScreen;