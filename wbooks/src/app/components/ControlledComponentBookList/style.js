import { StyleSheet } from 'react-native';

const ALIGN_ALERT_TEXT = 'center';
const styles = StyleSheet.create({
  containerText: {
    flex: 1,
    justifyContent: ALIGN_ALERT_TEXT,
    alignItems: ALIGN_ALERT_TEXT
  },
  textAlert: {
    fontWeight: 'bold',
    alignItems: ALIGN_ALERT_TEXT,
    justifyContent: ALIGN_ALERT_TEXT,
    textAlign: ALIGN_ALERT_TEXT
  }
});
export default styles;
