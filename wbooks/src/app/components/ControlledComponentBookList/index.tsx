import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { blue } from '@constants/colors';

import styles from './style';

interface Props {
  setLoading: (value: boolean) => void;
  setDataStatus: (value: boolean) => void;
}

export const WithLoading = (WrappedComponent: React.FunctionComponent<Props>, loadingMessage?: string) =>
  function HOC() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [data, setDataStatus] = useState<boolean>(true);

    const setLoadingState = (isComponentLoading: boolean) => setLoading(isComponentLoading);

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
        <WrappedComponent setLoading={setLoadingState} setDataStatus={setDataStatus} />
      </>
    );
  };
export default WithLoading;
