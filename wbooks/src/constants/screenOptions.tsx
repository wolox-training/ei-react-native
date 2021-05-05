import React from 'react';
import { Platform } from 'react-native';
import { white } from '@constants/colors';
import { CardStyleInterpolators } from '@react-navigation/stack';
import Header from '@components/Header';
import NotificationIcon from '@components/NotificationIcon';
import SeachIcon from '@components/SerchIcon';
import BackArrowIcon from '@components/BackArrowIcon';

const ALIGN_CENTER_TITLE = 'center' as 'center';
const TRANFORM_TEXT_UPPERCASE = 'uppercase' as 'uppercase';
const HEADER_CUSTOM_STYLE = Platform.OS === 'ios' ? { height: 130 } : { height: 105 };

export const HOME_OPTIONS = () => ({
  title: 'Library',
  headerTitleAlign: ALIGN_CENTER_TITLE,
  headerStyle: HEADER_CUSTOM_STYLE,
  headerBackground: () => <Header />,
  headerLeft: () => <NotificationIcon />,
  headerRight: () => <SeachIcon />,
  headerTintColor: white,
  headerTitleStyle: {
    textTransform: TRANFORM_TEXT_UPPERCASE
  }
});
export const DETAIL_BOOK_OPTIONS = () => ({
  title: 'Book Detail',
  headerTitleAlign: ALIGN_CENTER_TITLE,
  headerStyle: HEADER_CUSTOM_STYLE,
  headerTintColor: white,
  headerBackground: () => <Header />,
  headerLeft: () => <BackArrowIcon />,
  headerTitleStyle: {
    textTransform: TRANFORM_TEXT_UPPERCASE
  }
});
export const STACK_NAVIGATOR_OPTIONS = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};
