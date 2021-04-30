import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import Library from '@screens/Library';

const App: FC = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Library />
    </>
  );
};

export default App;
