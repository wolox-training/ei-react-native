if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import Reactotron from 'reactotron-react-native';
import React from 'react';

import App from './src/app';

export default function index() {
  Reactotron.log({ numbers: [1, 2, 3], boolean: false, nested: { here: 'we go' } });
  return <App />;
}
