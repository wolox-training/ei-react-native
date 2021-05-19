import { StyleSheet } from 'react-native';

const TITLE_WEIGHT = 'bold';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  listHeader: {
    marginTop: 34,
    fontSize: 28,
    fontWeight: TITLE_WEIGHT,
    margin: 15
  },
  posts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  postTexts: {
    margin: 10,
    marginBottom: 15
  },
  postHeader: {
    fontWeight: TITLE_WEIGHT
  },
  image: {
    height: 380
  },
  presseableImage: {
    width: '50%',
    paddingHorizontal: 1
  }
});
export default styles;
