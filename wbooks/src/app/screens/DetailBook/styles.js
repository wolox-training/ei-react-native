import { StyleSheet } from 'react-native';
import { whiteBlue } from '@constants/colors';

const BORDER_RADIUS_BOTTOM = 20;

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
    borderBottomRightRadius: BORDER_RADIUS_BOTTOM,
    borderBottomLeftRadius: BORDER_RADIUS_BOTTOM,
    width: '100%'
  }
});

export default styles;
