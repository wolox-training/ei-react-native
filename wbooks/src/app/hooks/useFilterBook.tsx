import { useEffect, useMemo, useState } from 'react';
import { BookInterface, BookState } from '@interfaces/book';
import { useDispatch, useSelector } from 'react-redux';
import actionCreator from '@redux/book/actions';

export default function useFilterBook() {
  const dispatch = useDispatch();
  const { books, searchBook } = useSelector((state: BookState) => state);
  const [stateResults, setStateResults] = useState(true);
  const filteredBooks: BookInterface[] = useMemo(() => {
    return books.filter(book => book.title.toLowerCase().includes(searchBook?.toLowerCase()));
  }, [books, searchBook]);

  useEffect(() => {
    dispatch(actionCreator.getBooksList());
    setStateResults(filteredBooks.length > 0);
  }, [dispatch, filteredBooks, setStateResults]);

  return { searchBook, filteredBooks, stateResults };
}
