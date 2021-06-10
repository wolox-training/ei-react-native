import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import RenderBookList from '@components/RendererBookList';
import useFilterBook from '@hooks/useFilterBook';
import keyExtractor from '@utils/keyExtractor';
import WithLoading from '@components/ControlledComponentBookList';

import styles from './styles';

const message = 'No Results';
interface Props {
  setDataStatus: (value: boolean) => void;
}
function SearchBook({ setDataStatus }: Props) {
  const { filteredBooks, stateResults } = useFilterBook();
  useEffect(() => {
    setDataStatus(stateResults);
  }, [filteredBooks.length, setDataStatus, stateResults]);
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
