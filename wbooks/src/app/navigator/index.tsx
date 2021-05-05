import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Library from '@screens/Library';
import DetailBook from '@screens/DetailBook';
import { DETAIL_BOOK, HOME } from '@routes';
import { DETAIL_BOOK_OPTIONS, HOME_OPTIONS, STACK_NAVIGATOR_OPTIONS } from '@constants/screenOptions';

const Stack = createStackNavigator();

export default function Navigator(): ReactElement {
  return (
    <Stack.Navigator headerMode="float" screenOptions={STACK_NAVIGATOR_OPTIONS} initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Library} options={HOME_OPTIONS} />
      <Stack.Screen name={DETAIL_BOOK} component={DetailBook} options={DETAIL_BOOK_OPTIONS} />
    </Stack.Navigator>
  );
}
