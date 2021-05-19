import React from 'react';
import { ScrollView, Pressable, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { Mockposts } from '@constants/mockposts';
import Routes from '@constants/routes';
import { Post } from '@interfaces/posts';

import styles from './styles';

export default function Gallery() {
  const navigation = useNavigation();
  const GREAT_PHOTOS = 'Great Photos';

  function renderMockPosts() {
    const handlePress = (id: string, source: string, avatar: string, user: string) => {
      navigation.navigate(Routes.DetailPost, {
        post: { id, source, avatar, user }
      });
    };
    return Mockposts.map(({ id, source, avatar, user }: Post) => (
      <Pressable
        key={id}
        onPress={() => handlePress(id, source, avatar, user)}
        style={styles.presseableImage}>
        <SharedElement id={id}>
          <Image source={{ uri: source }} style={styles.image} resizeMethod="scale" resizeMode="cover" />
        </SharedElement>
        <View style={styles.postTexts}>
          <Text numberOfLines={1} style={styles.postHeader}>
            {user}
          </Text>
        </View>
      </Pressable>
    ));
  }

  return (
    <ScrollView style={styles.wrapper} showsHorizontalScrollIndicator={false}>
      <Text style={styles.listHeader}>{GREAT_PHOTOS}</Text>
      <View style={styles.posts}>{renderMockPosts()}</View>
    </ScrollView>
  );
}
