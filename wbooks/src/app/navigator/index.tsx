import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import WishList from '@screens/WishList';
import Suggest from '@screens/Suggest';
import Rentals from '@screens/Rentals';
import TabNav from '@components/TabBar';
import { TAB_BAR_OPTIONS } from '@constants/screenOptions';

import LibraryStack from './LibraryStack';

const Tab = createBottomTabNavigator();

const renderTab = (focused: boolean, name: string, key: string) => (
  <TabNav focused={focused} currentTab={name} key={key} />
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
