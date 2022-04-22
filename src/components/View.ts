import { getComponent } from '@bluebase/core';
import { View as NativeView, ViewProps } from 'react-native';

export { ViewProps };
export const View = getComponent<ViewProps>('View') as typeof NativeView;
