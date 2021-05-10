import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import Navigator from '@navigator';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
        <Navigator />
      </Provider>
    </>
  );
};

export default App;
