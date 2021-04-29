import React, { FC } from 'react';
import { SafeAreaView, ScrollView, View, StatusBar } from 'react-native';
import LibaryScreen from '@views/LibraryScreen/LibraryScreen';

import { indexStyles } from './indexStyle';

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      <SafeAreaView style={indexStyles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={indexStyles.scrollView}>
          <View style={indexStyles.body}>
            <LibaryScreen />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
