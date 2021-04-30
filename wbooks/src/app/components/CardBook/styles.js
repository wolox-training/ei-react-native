import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

export const styles = StyleSheet.create({
  containerCard: {
    display: 'flex',
    flexDirection: 'row',
    height: 120,
    elevation: 2,
    borderRadius: 5,
    shadowOffset: {
      width: 12,
      height: 12
    },
    shadowOpacity: 16.0,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: white,
    padding: 20,
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
    alignSelf: 'flex-start',
    width: '60%',
    display: 'flex',
    flexDirection: 'column'
  },
  image: {
    height: 80,
    width: 53
  }
});
