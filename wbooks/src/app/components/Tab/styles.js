import { StyleSheet } from 'react-native';
import { textActiveTab, textInactiveTab } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    height: 28,
    width: 30,
    marginTop: 3
  },
  textActive: {
    color: textActiveTab
  },
  textInactive: {
    color: textInactiveTab
  }
});

export default styles;
