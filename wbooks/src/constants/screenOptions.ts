import { white } from '@constants/colors';
import { CardStyleInterpolators } from '@react-navigation/stack';

export const HOME_OPTIONS = {
  title: 'Library',
  headerTitleAlign: 'center' as 'center'
};
export const DETAIL_BOOK_OPTIONS = {
  title: '',
  headerTitleAlign: 'center' as 'center',
  headerTransparent: true,
  headerTintColor: white
};
export const STACK_NAVIGATOR_OPTIONS = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};
