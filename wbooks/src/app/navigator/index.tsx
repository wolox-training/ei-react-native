import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import WishList from '@screens/WishList';
import Suggest from '@screens/Suggest';
import Rentals from '@screens/Rentals';
import TabBar from '@components/TabBar';

import LibraryStack from './LibraryStack';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Routes.Home} component={LibraryStack} />
      <Tab.Screen name={Routes.WishList} component={WishList} />
      <Tab.Screen name={Routes.Suggest} component={Suggest} />
      <Tab.Screen name={Routes.Rentals} component={Rentals} />
    </Tab.Navigator>
  );
}
