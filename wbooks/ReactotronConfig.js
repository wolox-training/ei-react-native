import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.configure({ name: 'React Native Demo' }).use(reactotronRedux()).connect();
Reactotron.setAsyncStorageHandler(AsyncStorage).configure().useReactNative().connect();
export default reactotron;
