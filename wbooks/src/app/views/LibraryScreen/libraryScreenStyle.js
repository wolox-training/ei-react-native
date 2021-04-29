import { StyleSheet } from 'react-native';
import { GeneralColors } from 'src/app/styles/GeneralColors';

export const libraryScreenStyle = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: GeneralColors.Blue,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20
  }
});
