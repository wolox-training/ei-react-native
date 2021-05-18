import React from 'react';
import { SafeAreaView, ScrollView, Pressable, Image, View, Text } from 'react-native';
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
    const handlePress = (post: Post) => {
      navigation.navigate(Routes.DetailPost, {
        post
      });
    };
    return Mockposts.map(post => (
      <Pressable key={post.id} onPress={() => handlePress(post)} style={styles.presseableImage}>
        <SharedElement id={post.id}>
          <Image source={{ uri: post.source }} style={styles.image} resizeMethod="scale" resizeMode="cover" />
        </SharedElement>
        <View style={styles.postTexts}>
          <Text numberOfLines={1} style={styles.postHeader}>
            {post.user}
          </Text>
        </View>
      </Pressable>
    ));
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.wrapper} showsHorizontalScrollIndicator={false}>
        <Text style={styles.listHeader}>{GREAT_PHOTOS}</Text>
        <View style={styles.posts}>{renderMockPosts()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
