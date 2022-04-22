import { getComponent } from '@bluebase/core';
import { FlatListProps } from 'react-native';

export { FlatListProps };
export const FlatList = getComponent<FlatListProps<any>>('FlatList');
