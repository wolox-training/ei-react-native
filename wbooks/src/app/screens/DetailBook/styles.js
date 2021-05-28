import { StyleSheet } from 'react-native';
import { gray, white, whiteBlue } from '@constants/colors';

const BORDER_RADIUS_BOTTOM = 4;
const ALIGN_BTN = 'center';
const SIZE_BTN = 90;

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
  },
  btnRent: {
    opacity: 0.8,
    elevation: 10,
    width: SIZE_BTN,
    justifyContent: ALIGN_BTN,
    alignItems: ALIGN_BTN,
    alignSelf: ALIGN_BTN,
    height: SIZE_BTN,
    marginVertical: 20,
    shadowColor: gray,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },
  btnTxt: {
    color: white,
    fontWeight: 'bold'
  }
});

export default styles;
