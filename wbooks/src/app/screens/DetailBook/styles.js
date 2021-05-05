import { Platform, StyleSheet } from 'react-native';
import { whiteBlue } from '@constants/colors';

const borderRadiusBottom = 20;
const platformMarginTop = Platform.OS === 'ios' ? 60 : 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: whiteBlue
  },
  containerText: {
    marginTop: platformMarginTop
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
    borderBottomRightRadius: borderRadiusBottom,
    borderBottomLeftRadius: borderRadiusBottom
  }
});

export default styles;
