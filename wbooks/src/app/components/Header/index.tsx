import React from 'react';
import { View, Image } from 'react-native';
import headerImage from '@assets/General/bc_nav_bar.png';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.headerContainerImage}>
      <Image source={headerImage} style={styles.imageHeader} resizeMethod="scale" resizeMode="stretch" />
    </View>
  );
}
