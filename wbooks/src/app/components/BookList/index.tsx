import React, { ReactElement } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import CardBook from '@components/CardBook';

interface BookInterface {
  author: string;
  imageUrl: string | null;
  title: string;
  id: number;
}

export default function BookList(): ReactElement {
  const renderBookList: ListRenderItem<BookInterface> = ({ item: { author, imageUrl, title, id } }) => (
    <CardBook author={author} image={imageUrl} title={title} id={id} />
  );

  const keyExtractorBook = (item: { id: number }) => item.id.toString();

  return (
    <FlatList
      data={BOOKS_MOCK}
      renderItem={renderBookList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractorBook}
    />
  );
}
