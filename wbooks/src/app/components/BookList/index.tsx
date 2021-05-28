import React, { ReactElement, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BookState } from '@interfaces/book';
import actionCreator from '@redux/book/actions';
import RenderBookList from '@components/RendererBookList';
import keyExtractor from '@utils/keyExtractor';

export default function BookList(): ReactElement {
  const dispatch = useDispatch();
  const bookList = useSelector((state: BookState) => state.books);
  useEffect(() => {
    dispatch(actionCreator.getBooksList());
  }, [dispatch]);

  return (
    <FlatList
      data={bookList}
      renderItem={RenderBookList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
}
