import React from 'react';
import { ListRenderItem } from 'react-native';
import { BookListInterface } from '@interfaces/book';
import CardBook from '@components/CardBook';

const RenderBookList: ListRenderItem<BookListInterface> = ({ item: { author, imageUrl, title, id } }) => (
  <CardBook author={author} image={imageUrl} title={title} id={id} />
);
export default RenderBookList;
