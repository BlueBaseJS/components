import { getComponent } from '@bluebase/core';
import { ViewStyle } from 'react-native';

import { ViewProps } from './View';

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
