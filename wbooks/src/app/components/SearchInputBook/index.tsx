import React from 'react';
import { useDispatch } from 'react-redux';
import { TextInput } from 'react-native';
import actionCreator from '@redux/book/actions';
import useFilterBook from '@hooks/useFilterBook';

import styles from './styles';

export default function SearchInputBook() {
  const dispatch = useDispatch();
  const { searchBook } = useFilterBook();
  const handleInput = (search: string) => dispatch(actionCreator.searchBooks(search));

  return (
    <TextInput
      style={styles.textInput}
      placeholder="Input a book"
      placeholderTextColor="#323232"
      onChangeText={handleInput}
      value={searchBook}
    />
  );
}
