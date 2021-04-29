import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

const indexStyles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  scrollView: {
    backgroundColor: white
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: white
  }
});
export default indexStyles;
