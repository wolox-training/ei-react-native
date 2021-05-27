import { BookListInterface } from '@interfaces/book';
import React from 'react';
import { ListRenderItem } from 'react-native';
import CardBook from '@components/CardBook';

const renderBookList: ListRenderItem<BookListInterface> = ({ item: { author, imageUrl, title, id } }) => (
  <CardBook author={author} image={imageUrl} title={title} id={id} />
);
export default renderBookList;
