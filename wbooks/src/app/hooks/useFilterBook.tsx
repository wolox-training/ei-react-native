import { useEffect, useMemo } from 'react';
import { BookInterface, BookState } from '@interfaces/book';
import { useDispatch, useSelector } from 'react-redux';
import actionCreator from '@redux/book/actions';

export default function useFilterBook() {
  const dispatch = useDispatch();
  const { books, searchBook } = useSelector((state: BookState) => state);
  useEffect(() => {
    dispatch(actionCreator.getBooksList());
  }, [dispatch]);

  const filteredBooks: BookInterface[] = useMemo(() => {
    return books.filter(x => x.title.toLowerCase().includes(searchBook?.toLowerCase()));
  }, [books, searchBook]);

  return { searchBook, filteredBooks };
}
