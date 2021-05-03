import { StyleSheet } from 'react-native';
import { white, gray } from '@constants/colors';

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    height: 95,
    borderRadius: 5,
    shadowColor: gray,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 16,
    width: '89%',
    alignSelf: 'center',
    backgroundColor: white,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginBottom: 10
  },
  titleCard: {
    fontSize: 19
  },
  authorCard: {
    fontSize: 13,
    marginTop: 3
  },
  containerText: {
    width: '70%'
  },
  image: {
    borderWidth: 1,
    height: 60,
    width: 42
  }
});
export default styles;
