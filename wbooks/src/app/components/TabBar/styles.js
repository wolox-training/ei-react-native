import { white } from '@constants/colors';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height } = Dimensions.get('window');

const CUSTOM_HEIGHT = height > 720 && Platform.OS === 'ios' ? 60 : 50;

const TOTAL_PERCENT = '100%';
const SPACE_BETWEEN = 'space-between';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: TOTAL_PERCENT,
    alignItems: 'center',
    justifyContent: SPACE_BETWEEN
  },
  container: {
    height: CUSTOM_HEIGHT,
    flexDirection: 'row',
    backgroundColor: white,
    justifyContent: SPACE_BETWEEN,
    width: TOTAL_PERCENT
  }
});
export default styles;
