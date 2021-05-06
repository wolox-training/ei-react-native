import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
}

export default function CustomIconHeader({ icon }: Props) {
  return <Image source={icon} style={styles.image} resizeMethod="scale" resizeMode="contain" />;
}
