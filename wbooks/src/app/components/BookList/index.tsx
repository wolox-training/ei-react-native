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
  const bookList = useSelector((state: BookState) => state.books);
  useEffect(() => {
    dispatch(actionCreator.getBooksList());
    if (bookList?.length < 1) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [dispatch, setLoading, bookList]);

  return (
    <FlatList
      data={bookList}
      renderItem={RenderBookList}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
}

export default WithLoading(BookList);
