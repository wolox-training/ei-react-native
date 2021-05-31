import React, { ReactElement, useRef, useState } from 'react';
import { Image, Text, View, Animated, Pressable } from 'react-native';
import notImageFound from '@assets/General/not_image_found.png';
import { cyan, green } from '@constants/colors';

import styles from './styles';
import { ADD_WISH, ANIMATE_DURATION, CHECK, EMPTY, IMAGE, USE_NATIVE_DRIVE } from './constants';

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
  const [textBtn, setTextBtn] = useState(ADD_WISH);
  const borderRadius = useRef(new Animated.Value(10)).current;
  const animationColor = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1.1)).current;
  const boxInterpolation = animationColor.interpolate({
    inputRange: [0, 1],
    outputRange: [cyan, green]
  });

  const animatedStyleBtn = {
    backgroundColor: boxInterpolation,
    borderRadius,
    transform: [
      {
        scale
      }
    ]
  };
  const handlePressAnimation = () => {
    setTextBtn(EMPTY);
    Animated.parallel([
      Animated.timing(borderRadius, {
        toValue: 100,
        duration: ANIMATE_DURATION,
        useNativeDriver: USE_NATIVE_DRIVE
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: ANIMATE_DURATION,
        useNativeDriver: USE_NATIVE_DRIVE
      }),
      Animated.timing(animationColor, {
        toValue: 1,
        duration: ANIMATE_DURATION,
        useNativeDriver: USE_NATIVE_DRIVE
      })
    ]).start(() => setTextBtn(CHECK));
  };

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : notImageFound}
        style={styles.images}
        resizeMethod={IMAGE.RESIZE_METHOD}
        resizeMode={IMAGE.RESIZE_MODE}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{author}</Text>
      </View>
      <Pressable onPress={handlePressAnimation}>
        <Animated.View style={[styles.btnRent, animatedStyleBtn]}>
          <Text style={styles.btnTxt}>{textBtn}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}
