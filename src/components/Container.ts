import { getComponent } from '@bluebase/core';
import { ViewStyle } from 'react-native';

import { ViewProps } from './View';

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
