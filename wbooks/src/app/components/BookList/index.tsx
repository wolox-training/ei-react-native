import React, { ReactElement, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BookState } from '@interfaces/book';
import actionCreator from '@redux/book/actions';
import RenderBookList from '@components/RendererBookList';
import keyExtractor from '@utils/keyExtractor';
import WithLoading from '@components/ControlledComponentBookList';

interface Props {
  setLoading: (value: boolean) => void;
}

function BookList({ setLoading }: Props): ReactElement {
  const dispatch = useDispatch();
  const { books, booksLoading } = useSelector((state: BookState) => state);

  useEffect(() => {
    dispatch(actionCreator.getBooksList());
  }, [dispatch, books]);

  useEffect(() => {
    setLoading(booksLoading);
  }, [booksLoading, setLoading]);

  return (
    <FlatList
      data={books}
      renderItem={RenderBookList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
}

export default WithLoading(BookList);
