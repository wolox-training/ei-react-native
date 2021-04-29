import React, { FC } from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import LibaryScreen from '@screens/LibraryScreen/LibraryScreen';

import styles from './styles';

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <LibaryScreen />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
