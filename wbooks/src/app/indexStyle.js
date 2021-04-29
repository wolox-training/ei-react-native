import { StyleSheet } from 'react-native';

import { GeneralColors } from './styles/GeneralColors';

export const indexStyles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  scrollView: {
    backgroundColor: GeneralColors.White
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: GeneralColors.White
  }
});
