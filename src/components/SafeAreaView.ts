import { ViewProps as SafeAreaViewProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export { SafeAreaViewProps };
export const SafeAreaView = getComponent<SafeAreaViewProps>('SafeAreaView');
