import { StyleSheet } from 'react-native';
import { white, gray } from '@constants/colors';

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    height: 120,
    elevation: 2,
    borderRadius: 5,
    shadowColor: gray,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 16,
    width: '85%',
    alignSelf: 'center',
    backgroundColor: white,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    marginBottom: 10
  },
  titleCard: {
    fontSize: 22
  },
  authorCard: {
    fontSize: 15
  },
  containerText: {
    height: '100%',
    width: '60%'
  },
  image: {
    height: 80,
    width: 53
  }
});
export default styles;
