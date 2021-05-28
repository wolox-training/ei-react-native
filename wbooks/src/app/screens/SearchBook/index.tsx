import React from 'react';
import { FlatList } from 'react-native';
import NoneResult from '@components/NoResults';
import RenderBookList from '@components/RendererBookList';
import useFilterBook from '@hooks/useFilterBook';
import keyExtractor from '@utils/keyExtractor';

import styles from './styles';

export default function SearchBook() {
  const { filteredBooks } = useFilterBook();
  const renderAlert = () => filteredBooks.length < 1 && <NoneResult />;
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
