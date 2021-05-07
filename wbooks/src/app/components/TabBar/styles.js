import { StyleSheet, Dimensions } from 'react-native';
import { cyan, lightGray } from '@constants/colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width,
    height: '100%',
    alignItems: 'center'
  },
  image: {
    height: 28,
    width: 30,
    marginTop: 3
  },
  textActive: {
    color: cyan
  },
  textInactive: {
    color: lightGray
  }
});

export default styles;
