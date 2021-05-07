import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import WishList from '@screens/WishList';
import Suggest from '@screens/Suggest';
import Rentals from '@screens/Rentals';
import TabBar from '@components/TabBar';
import Library from '@screens/Library';
import DetailBook from '@screens/DetailBook';
import {
  TAB_BAR_OPTIONS,
  DETAIL_BOOK_OPTIONS,
  HOME_OPTIONS,
  STACK_NAVIGATOR_OPTIONS
} from '@constants/screenOptions';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LibraryStack(): ReactElement {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={STACK_NAVIGATOR_OPTIONS}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Library} options={HOME_OPTIONS} />
      <Stack.Screen name={Routes.DetailBook} component={DetailBook} options={DETAIL_BOOK_OPTIONS} />
    </Stack.Navigator>
  );
}

const renderTab = (focused: boolean, name: string, key: string): ReactElement => (
  <TabBar focused={focused} currentTab={name} key={key} />
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      tabBarOptions={TAB_BAR_OPTIONS}
      screenOptions={({ route: { name, key } }) => ({
        tabBarIcon: ({ focused }) => renderTab(focused, name, key)
      })}>
      <Tab.Screen name={Routes.Home} component={LibraryStack} />
      <Tab.Screen name={Routes.WishList} component={WishList} />
      <Tab.Screen name={Routes.Suggest} component={Suggest} />
      <Tab.Screen name={Routes.Rentals} component={Rentals} />
    </Tab.Navigator>
  );
}
