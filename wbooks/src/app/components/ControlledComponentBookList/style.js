import { StyleSheet } from 'react-native';

const ALIGN_CONTAINER = 'center';
const styles = StyleSheet.create({
  containerText: {
    flex: 1,
    justifyContent: ALIGN_CONTAINER,
    alignItems: ALIGN_CONTAINER
  },
  textAlert: {
    fontWeight: 'bold'
  }
});
export default styles;
