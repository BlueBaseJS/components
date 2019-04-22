import { FlatListProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export { FlatListProps };
export const FlatList = getComponent<FlatListProps<any>>('FlatList');
