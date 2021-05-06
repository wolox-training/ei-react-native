import React, { ReactElement } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import backArrow from '@assets/General/ic_back.png';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';

export default function BackArrowIcon(): ReactElement {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
      <Image source={backArrow} style={styles.image} resizeMethod="scale" resizeMode="contain" />
    </TouchableOpacity>
  );
}
