import React, { ReactElement, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BookState } from '@interfaces/book';
import actionCreator from '@redux/book/actions';
import renderBookList from '@components/RendererBookList';

export default function BookList(): ReactElement {
  const dispatch = useDispatch();
  const bookList = useSelector((state: BookState) => state.books);
  useEffect(() => {
    dispatch(actionCreator.getBooksList());
  }, [dispatch]);

  const keyExtractorBook = (item: { id: number }) => item.id.toString();

  return (
    <FlatList
      data={bookList}
      renderItem={renderBookList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractorBook}
    />
  );
}
