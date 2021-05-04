import { StyleSheet } from 'react-native';
import { whiteBlue } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: whiteBlue
  },
  containerText: {
    marginTop: 20
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  paragraph: {
    marginTop: 10,
    textAlign: 'center'
  },
  images: {
    height: 400,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  }
});

export default styles;
