import { StyleSheet } from 'react-native';
import { whiteBlue } from '@constants/colors';

const TOTAL_PERCENT = '100%';
const styles = StyleSheet.create({
  headerContainerImage: {
    width: TOTAL_PERCENT,
    height: TOTAL_PERCENT,
    backgroundColor: whiteBlue
  },
  imageHeader: {
    height: TOTAL_PERCENT,
    width: TOTAL_PERCENT
  }
});
export default styles;
