import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
}

export default function CustomIconHeader({ icon }: Props) {
  const navigation = useNavigation();

  const hanldePress = () => {
    navigation.navigate(Routes.SearchBook);
  };
  return (
    <TouchableWithoutFeedback onPress={hanldePress}>
      <Image source={icon} style={styles.image} resizeMethod="scale" resizeMode="contain" />
    </TouchableWithoutFeedback>
  );
}
