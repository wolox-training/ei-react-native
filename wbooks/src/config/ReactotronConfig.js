import Reactotron, { asyncStorage } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

const NAME_APP = 'wbook';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ name: NAME_APP })
  .useReactNative({})
  .use(asyncStorage())
  .use(reactotronRedux())
  .connect();

export default reactotron;
