import { StyleSheet } from 'react-native';
import { whiteBlue } from '@constants/colors';

const BORDER_RADIUS_BOTTOM = 4;

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    borderRadius: BORDER_RADIUS_BOTTOM,
    width: '100%'
  }
});

export default styles;
