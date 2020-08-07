import { ViewProps } from './View';
import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface ContainerStyles {
	paddingHorizontalXS: ViewStyle;
}

export interface ContainerProps extends ViewProps {}

/**
 * # Container
 *
 * Grid Container
 */
export const Container = getComponent<ContainerProps & { styles?: ContainerStyles }>('Container');
