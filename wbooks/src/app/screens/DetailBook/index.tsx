import React, { ReactElement, useRef, useState } from 'react';
import { Image, Text, View, Animated, Pressable } from 'react-native';
import notImageFound from '@assets/General/not_image_found.png';
import { cyan, green } from '@constants/colors';

import styles from './styles';
import { DETAILBOOK_CONST, ANIMATE_DURATION } from './constants';

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
  const [textBtn, setTextBtn] = useState(DETAILBOOK_CONST.ADD_WISH);
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
    const NATIVEDRIVEFALSE = false;
    setTextBtn(DETAILBOOK_CONST.EMPTY);
    Animated.parallel([
      Animated.timing(borderRadius, {
        toValue: 100,
        duration: ANIMATE_DURATION,
        useNativeDriver: NATIVEDRIVEFALSE
      }),
      Animated.timing(scale, {
        toValue: 0.9,
        duration: ANIMATE_DURATION,
        useNativeDriver: NATIVEDRIVEFALSE
      }),
      Animated.timing(animationColor, {
        toValue: 1,
        duration: ANIMATE_DURATION,
        useNativeDriver: NATIVEDRIVEFALSE
      })
    ]).start(() => setTextBtn(DETAILBOOK_CONST.CHECK));
  };

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
      <Pressable onPress={handlePressAnimation}>
        <Animated.View style={[styles.btnRent, animatedStyleBtn]}>
          <Text style={styles.btnTxt}>{textBtn}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}
