import React, { ReactElement, useEffect } from 'react';
import { Image, Text, Animated, View } from 'react-native';
import imageNotFound from '@assets/General/not_image_found.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  image: string | null;
  title: string;
  author: string;
  id: number;
}

export default function CardBook({ image, title, author, id }: Props): ReactElement {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(Routes.DetailBook, { image, title, author, id });
  };
  const opacity = React.useRef(new Animated.Value(0)).current;
  const DELAYBYID = 350 * id;
  const customStyle = {
    opacity
  };
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: DELAYBYID,
      useNativeDriver: true
    }).start();
  }, [opacity, DELAYBYID]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.containerCard, customStyle]}>
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
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
