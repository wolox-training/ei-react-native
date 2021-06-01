import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { blue } from '@constants/colors';

import styles from './style';

export const WithLoading = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
  loadingMessage?: string
) => {
  function HOC(props: any) {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(true);

    const setLoadingState = (isComponentLoading: boolean) => {
      setLoading(isComponentLoading);
    };

    const renderActivity = () => <ActivityIndicator size="large" color={blue} />;
    const renderNullDataMessage = () => (
      <View style={styles.containerText}>
        <Text style={styles.textAlert}>{loadingMessage}</Text>
      </View>
    );

    return (
      <>
        {isLoading && renderActivity()}
        {!data && renderNullDataMessage()}
        <WrappedComponent {...props} setLoading={setLoadingState} setData={setData} />
      </>
    );
  }
  return HOC;
};
export default WithLoading;
