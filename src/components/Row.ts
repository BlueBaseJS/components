import { ViewProps } from './View';
import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface RowStyles {
	root: ViewStyle;
}

export interface RowProps extends ViewProps {
	alignItems?: ViewStyle['alignItems'];
	justifyContent?: ViewStyle['justifyContent'];
	nowrap?: boolean;
	rowSize?: number;
}

/**
 * # Row
 *
 * Grid Row
 */
export const Row = getComponent<RowProps & { styles?: RowStyles }>('Row');
