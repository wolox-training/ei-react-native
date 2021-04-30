import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

interface Props {
  image: string | null;
  title: string;
  author: string;
  genre: string;
  publisher: string;
  year: string;
  id: number;
}

export default function CardBook(props: Props): ReactElement {
  const { image, title, author } = props;
  return (
    <View style={styles.containerCard}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" resizeMethod="resize" />
      ) : (
        <Image
          source={require('../assets/General/not_image_found.png')}
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
        />
      )}
      <View style={styles.containerText}>
        <Text style={styles.titleCard}>{title}</Text>
        <Text style={styles.authorCard}>{author}</Text>
      </View>
    </View>
  );
}
