import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import RenderBookList from '@components/RendererBookList';
import useFilterBook from '@hooks/useFilterBook';
import keyExtractor from '@utils/keyExtractor';
import WithLoading from '@components/ControlledComponentBookList';

import styles from './styles';

const message = 'No Results';
interface Props {
  setData: (value: boolean) => void;
}
function SearchBook({ setData }: Props) {
  const { filteredBooks } = useFilterBook();
  useEffect(() => {
    if (filteredBooks.length < 1) setData(false);
    else setData(true);
  }, [filteredBooks.length, setData]);
  return (
    <FlatList
      style={styles.container}
      data={filteredBooks}
      renderItem={RenderBookList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
}
export default WithLoading(SearchBook, message);
