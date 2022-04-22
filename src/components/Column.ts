import { getComponent } from '@bluebase/core';
import { ViewStyle } from 'react-native';

import { ViewProps } from './View';

export interface ColumnStyles {
	root: ViewStyle;
}

export interface ColumnProps extends ViewProps {
	/**
	 * The width of the column on extra small screen.
	 */
	size?: number;

	/**
	 * The number of columns to offset on extra small screen.
	 */
	offset?: number;

	/**
	 * The width of the column on extra small screen.
	 */
	xs?: number;

	/**
	 * The number of columns to offset on extra small screen.
	 */
	xsOffset?: number;

	/**
	 * Hide this column on extra small screen.
	 */
	xsHidden?: boolean;

	/**
	 * The width of the column on small screen.
	 */
	sm?: number;

	/**
	 * The number of columns to offset on small screen.
	 */
	smOffset?: number;

	/**
	 * Hide this column on small screen.
	 */
	smHidden?: boolean;

	/**
	 * The width of the column on medium screen.
	 */
	md?: number;

	/**
	 * The number of columns to offset on medium screen.
	 */
	mdOffset?: number;

	/**
	 * Hide this column on medium screen.
	 */
	mdHidden?: boolean;

	/**
	 * The width of the column on large screen.
	 */
	lg?: number;

	/**
	 * The number of columns to offset on large screen.
	 */
	lgOffset?: number;

	/**
	 * Hide this column on large screen.
	 */
	lgHidden?: boolean;

	/**
	 * The width of the column on extra large screen.
	 */
	xl?: number;

	/**
	 * The number of columns to offset on extra large screen.
	 */
	xlOffset?: number;

	/**
	 * Hide this column on extra large screen.
	 */
	xlHidden?: boolean;

	// styles?: Partial<ColumnStyles>;
}

/**
 * # Column
 *
 * Grid Column
 */
export const Column = getComponent<ColumnProps & { styles?: ColumnStyles }>('Column');
