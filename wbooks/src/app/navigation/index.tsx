import React, { ReactElement } from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Library from '@screens/Library';
import DetailBook from '@screens/DetailBook';
import { white } from '@constants/colors';

const Stack = createStackNavigator();

export default function Navigation(): ReactElement {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Library}
        options={{
          title: 'Library',
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
        name="DetailBook"
        component={DetailBook}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerTintColor: white
        }}
      />
    </Stack.Navigator>
  );
}
