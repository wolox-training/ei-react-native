import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import icBackArrow from '@assets/General/ic_back.png';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';

export default function BackArrowIcon() {
  const navigation = useNavigation();
  const handlePress = () => navigation.goBack();
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={handlePress}>
      <Image source={icBackArrow} style={styles.image} resizeMethod="scale" resizeMode="contain" />
    </TouchableOpacity>
  );
}
