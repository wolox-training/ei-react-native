type KeyProp = {
  id: number;
};
const keyExtractor = ({ id }: KeyProp) => id.toString();
export default keyExtractor;
