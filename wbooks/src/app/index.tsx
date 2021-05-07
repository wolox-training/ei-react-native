import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@navigator';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
