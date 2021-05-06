import Routes from '@constants/routes';
import React, { ReactElement, useState } from 'react';
import { View } from 'react-native';

import Tab from '../Tab';

import styles from './styles';

interface Props {
  navigation: any;
  state: {
    routes: any;
    index: number;
  };
}
export default function TabBar({ navigation, state: { routes, index } }: Props) {
  const [selected, setSelected] = useState<string>(Routes.Home);
  const imageActive = (currentTab: string) => currentTab === selected;

  const handlePress = (activeTab: string, routeIndex: number) => {
    if (index !== routeIndex) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };
  const renderTab = (): ReactElement => {
    return routes.map((route: { name: string; key: string }, routeIndex: number) => (
      <Tab
        tab={route}
        onPress={() => handlePress(route.name, routeIndex)}
        imageActive={imageActive(route.name)}
        key={route.key}
      />
    ));
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>{renderTab()}</View>
    </View>
  );
}
