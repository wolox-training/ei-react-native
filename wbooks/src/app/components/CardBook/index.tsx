import React, { ReactElement } from 'react';
import { Image, Text, View } from 'react-native';
import imageNotFound from '@assets/General/not_image_found.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';

interface Props {
  image: string | null;
  title: string;
  author: string;
  id: number;
}

export default function CardBook({ image, title, author, id }: Props): ReactElement {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('DetailBook', { image, title, author, id })}>
      <View style={styles.containerCard}>
        <Image
          source={image ? { uri: image } : imageNotFound}
          style={styles.image}
          resizeMode={image ? 'contain' : 'cover'}
          resizeMethod="resize"
        />
        <View style={styles.containerText}>
          <Text style={styles.titleCard}>{title}</Text>
          <Text style={styles.authorCard}>{author}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
