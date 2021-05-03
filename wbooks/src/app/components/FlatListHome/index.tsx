import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import CardBook from '@components/CardBook';

interface BookInerface {
  author: string;
  imageUrl: string | null;
  title: string;
  id: number;
}

export default function FlatListHome(): ReactElement {
  return (
    <FlatList
      data={BOOKS_MOCK}
      renderItem={({ item }: { item: BookInerface }) => (
        <CardBook author={item.author} image={item.imageUrl} title={item.title} id={item.id} />
      )}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
    />
  );
}
