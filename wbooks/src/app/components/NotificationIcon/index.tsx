import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';
import notifications from '@assets/General/ic_notifications.png';

import styles from './styles';

export default function NotificationIcon(): ReactElement {
  return (
    <View style={styles.imageContainer}>
      <Image source={notifications} style={styles.image} resizeMethod="scale" resizeMode="contain" />
    </View>
  );
}
