import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';
import searchIcon from '@assets/General/ic_search.png';

import styles from './styles';

export default function SeachIcon(): ReactElement {
  return (
    <View style={styles.containerImage}>
      <Image source={searchIcon} style={styles.image} resizeMethod="scale" resizeMode="contain" />
    </View>
  );
}
