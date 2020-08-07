import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TableRowProps {
	/**
	 * If true, the table row will shade on hover.
	 */
	hover?: boolean;

	/**
	 * If true, the table row will have the selected shading.
	 */
	selected?: boolean;

	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableRowDefaultProps = {
	hover: false,
	selected: false,
};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableRow
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TableRow = getComponent<TableRowProps>('TableRow');
TableRow.defaultProps = TableRowDefaultProps;
