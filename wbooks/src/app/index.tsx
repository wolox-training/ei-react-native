import React, { FC } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import Library from '@screens/LibraryScreen/Libary';

import { styles } from './styles';

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.body}>
          <Library />
        </View>
      </ScrollView>
    </>
  );
};

export default App;
