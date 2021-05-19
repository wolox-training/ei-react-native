import { StyleSheet } from 'react-native';
import { cyan, white } from '@constants/colors';

const TITLE_WEIGHT = 'bold';
const TITLE_FONTSIZE = 24;

const AVATAR_SIZE = 60;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    height: 25,
    width: 15
  },
  postImage: {
    height: 600,
    width: '100%'
  },
  postTitle: {
    fontSize: TITLE_FONTSIZE,
    marginTop: 10,
    fontWeight: TITLE_WEIGHT
  },
  postContactButton: {
    marginVertical: 26,
    padding: 10,
    backgroundColor: cyan,
    borderRadius: 20,
    elevation: 10,
    marginHorizontal: 40
  },
  postContactText: {
    fontSize: TITLE_FONTSIZE,
    color: white,
    fontWeight: TITLE_WEIGHT,
    textAlign: 'center'
  },
  imageContainer: {
    borderRadius: 1000,
    overflow: 'hidden',
    height: AVATAR_SIZE,
    width: AVATAR_SIZE
  },
  image: {
    height: '100%',
    width: '100%'
  },
  descriptionPostContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 25
  }
});
export default styles;
