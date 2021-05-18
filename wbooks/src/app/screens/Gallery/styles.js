const { StyleSheet } = require('react-native');

const FONT_BOLD = 'bold';
const FIFTEEN = 15;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  listHeader: {
    marginTop: 34,
    fontSize: 28,
    fontWeight: FONT_BOLD,
    margin: FIFTEEN
  },
  posts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  postTexts: {
    margin: 10,
    marginBottom: FIFTEEN
  },
  postHeader: {
    fontWeight: FONT_BOLD
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
