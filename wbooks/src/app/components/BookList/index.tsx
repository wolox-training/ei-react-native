import React, { ReactElement, useEffect } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import CardBook from '@components/CardBook';
import { useDispatch, useSelector } from 'react-redux';
import { BookListInterface, BookState } from '@interfaces/book';
import actionCreator from '@redux/book/actions';

export default function BookList(): ReactElement {
  const dispatch = useDispatch();
  const bookList = useSelector((state: BookState) => state.books);
  useEffect(() => {
    dispatch(actionCreator.getBooksList());
  }, [dispatch]);
  const renderBookList: ListRenderItem<BookListInterface> = ({ item: { author, imageUrl, title, id } }) => (
    <CardBook author={author} image={imageUrl} title={title} id={id} />
  );

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
