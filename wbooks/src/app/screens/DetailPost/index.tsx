import React, { useRef, useEffect } from 'react';
import { View, Image, Text, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IC_BACK from '@assets/General/ic_back.png';
import { PostsRoutes } from '@interfaces/posts';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

import styles from './styles';

interface Props {
  navigation: NavigationProp<PostsRoutes, 'post'>;
  route: RouteProp<PostsRoutes, 'post'>;
}
export default function DetailPost({ route, navigation }: Props) {
  const opacity = useRef(new Animated.Value(0)).current;
  const { post } = route.params;
  const safeInsets = useSafeAreaInsets();
  const customSpace = 15;
  const customStyles = {
    opacity,
    top: safeInsets.top + customSpace,
    left: safeInsets.left + customSpace,
    right: safeInsets.right + customSpace
  };
  const TEXT_BTN = 'Contact now';

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 550,
      delay: 500,
      useNativeDriver: true
    }).start();
  }, [opacity]);

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <Animated.View style={[styles.container, customStyles]}>
        <TouchableWithoutFeedback onPress={handlePress}>
          <Image style={styles.icon} resizeMethod="resize" resizeMode="contain" source={IC_BACK} />
        </TouchableWithoutFeedback>
      </Animated.View>
      <SharedElement id={post.id}>
        <Image source={{ uri: post.source }} style={styles.postImage} />
      </SharedElement>
      <View>
        <Animated.View style={[styles.descriptionPostContainer, { opacity }]}>
          <Text style={styles.postTitle}>{post.user}</Text>
          <View style={styles.imageContainer}>
            <Image source={{ uri: post.avatar }} style={styles.image} resizeMode="cover" />
          </View>
        </Animated.View>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.postContactButton, { opacity }]}>
            <Text style={styles.postContactText}>{TEXT_BTN}</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
}
