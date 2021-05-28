import React from 'react';
import { TouchableWithoutFeedback, Image, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
}

export default function CustomIconHeader({ icon }: Props) {
  const navigation = useNavigation();

  const handlePress = () => navigation.navigate(Routes.SearchBook);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image source={icon} style={styles.image} resizeMethod="scale" resizeMode="contain" />
    </TouchableWithoutFeedback>
  );
}
