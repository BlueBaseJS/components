import { StyleProp, ViewStyle } from 'react-native';
import { ViewProps } from './View';
import { getComponent } from '@bluebase/core';

export interface ContainerStyles {
	paddingHorizontalXS: StyleProp<ViewStyle>;
}

export interface ContainerProps extends ViewProps {}

/**
 * # Container
 *
 * Grid Container
 */
export const Container = getComponent<ContainerProps & { styles: ContainerStyles }>('Container');
