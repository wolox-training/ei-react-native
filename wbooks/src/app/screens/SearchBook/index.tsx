import React from 'react';
import { FlatList } from 'react-native';
import RenderBookList from '@components/RendererBookList';
import EmptySearch from '@components/EmptySearch';
import useFilterBook from '@hooks/useFilterBook';
import keyExtractor from '@utils/keyExtractor';

import styles from './styles';

export default function SearchBook() {
  const { filteredBooks } = useFilterBook();
  const renderAlert = () => filteredBooks.length < 1 && <EmptySearch />;
  return (
    <>
      {renderAlert()}
      <FlatList
        style={styles.container}
        data={filteredBooks}
        renderItem={RenderBookList}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
      />
    </>
  );
}
