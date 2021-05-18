import { StyleSheet } from 'react-native';
import { cyan, white } from '@constants/colors';

const BOLD = 'bold';
const ONEHUNDRERPERCENT = '100%';
const CENTER = 'center';
const ROW = 'row';

const ONE = 1;
const TEN = 10;
const SIXTY = 60;
const TWENTYFOUR = 24;
const TWENTYFIVE = 25;
const styles = StyleSheet.create({
  wrapper: {
    flex: ONE
  },
  container: {
    position: 'absolute',
    zIndex: ONE,
    flexDirection: ROW,
    justifyContent: 'space-between'
  },
  icon: {
    height: TWENTYFIVE,
    width: 15
  },
  postImage: {
    height: 600,
    width: ONEHUNDRERPERCENT
  },
  postTitle: {
    fontSize: TWENTYFOUR,
    marginTop: TEN,
    fontWeight: BOLD
  },
  postContactButton: {
    marginVertical: 26,
    padding: TEN,
    backgroundColor: cyan,
    borderRadius: 20,
    elevation: TEN,
    marginHorizontal: 40
  },
  postContactText: {
    fontSize: TWENTYFOUR,
    color: white,
    fontWeight: BOLD,
    textAlign: CENTER
  },
  imageContainer: {
    borderRadius: 1000,
    overflow: 'hidden',
    height: SIXTY,
    width: SIXTY
  },
  image: {
    height: ONEHUNDRERPERCENT,
    width: ONEHUNDRERPERCENT
  },
  descriptionPostContainer: {
    width: ONEHUNDRERPERCENT,
    flexDirection: ROW,
    justifyContent: 'space-around',
    alignItems: CENTER,
    marginTop: TWENTYFIVE
  }
});
export default styles;
