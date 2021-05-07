import React, { useEffect, useState } from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';
import icLibrary from '@assets/Tool_bar/ic_library.png';
import icLibraryActive from '@assets/Tool_bar/ic_library_active.png';
import icWishList from '@assets/Tool_bar/ic_wishlist.png';
import icWishListActive from '@assets/Tool_bar/ic_wishlist_active.png';
import icSuggest from '@assets/Tool_bar/ic_add_new.png';
import icSuggestActive from '@assets/Tool_bar/ic_add_new_active.png';
import icMyRentals from '@assets/Tool_bar/ic_myrentals.png';
import icMyRentalsActive from '@assets/Tool_bar/ic_myrentals_active.png';
import Routes from '@constants/routes';

import styles from './styles';

interface Props {
  currentTab: string;
  focused: boolean;
}
export default function TabNav({ currentTab, focused }: Props) {
  const [imageActiveState, setImageActiveState] = useState<ImageSourcePropType>(icLibraryActive);
  const [imageInactiveState, setImageInactiveState] = useState<ImageSourcePropType>(icLibrary);
  const setIconImages = (tabName: string) => {
    switch (tabName) {
      case Routes.Home:
        setImageInactiveState(icLibrary);
        setImageActiveState(icLibraryActive);
        break;
      case Routes.WishList:
        setImageInactiveState(icWishList);
        setImageActiveState(icWishListActive);
        break;
      case Routes.Suggest:
        setImageInactiveState(icSuggest);
        setImageActiveState(icSuggestActive);
        break;
      case Routes.Rentals:
        setImageInactiveState(icMyRentals);
        setImageActiveState(icMyRentalsActive);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    setIconImages(currentTab);
  }, [currentTab]);
  return (
    <View style={styles.container}>
      <Image
        source={focused ? imageActiveState : imageInactiveState}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="contain"
      />
      <Text style={focused ? styles.textActive : styles.textInactive}>{currentTab}</Text>
    </View>
  );
}
