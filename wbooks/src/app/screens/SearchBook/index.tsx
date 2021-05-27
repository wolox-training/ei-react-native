import React from 'react';
import { FlatList } from 'react-native';
import NoneResult from '@components/NoResults';
import renderBookList from '@components/RendererBookList';
import useFilterBook from '@hooks/useFilterBook';

import styles from './styles';

export default function SearchBook() {
  const { filteredBooks } = useFilterBook();

  const keyExtractorBook = (item: { id: number }) => item.id.toString();
  return (
    <>
      {filteredBooks.length === 0 && <NoneResult />}
      <FlatList
        style={styles.container}
        data={filteredBooks}
        renderItem={renderBookList}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractorBook}
      />
    </>
  );
}
