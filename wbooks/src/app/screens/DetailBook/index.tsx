import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';
import notImageFound from '@assets/General/not_image_found.png';

import styles from './styles';

interface Props {
  route: {
    params: {
      id: number;
      author: string;
      title: string;
      image: string | null;
    };
  };
}

export default function DetailBook({
  route: {
    params: { author, title, image }
  }
}: Props): ReactElement {
  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : notImageFound}
        style={styles.images}
        resizeMethod="auto"
        resizeMode="contain"
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{author}</Text>
      </View>
    </View>
  );
}
