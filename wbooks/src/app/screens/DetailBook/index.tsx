import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';

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
      {image && (
        <Image source={{ uri: image }} style={styles.images} resizeMethod="scale" resizeMode="cover" />
      )}
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{author}</Text>
      </View>
    </View>
  );
}
