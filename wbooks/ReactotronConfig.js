import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.configure({ name: 'React Native Demo' })
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux())
  .useReactNative({})
  .connect();
export default reactotron;
