import { StyleSheet, Platform } from 'react-native';
import { white } from '@constants/colors';

const isIos = Platform.OS === 'ios';

const WIDTH_IOS = isIos ? 300 : '100%';
const MARGIN_LEFT_IOS = isIos ? 10 : 0;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: white,
    borderRadius: 20,
    padding: 4,
    paddingLeft: 7,
    width: WIDTH_IOS,
    marginLeft: MARGIN_LEFT_IOS
  }
});
export default styles;
