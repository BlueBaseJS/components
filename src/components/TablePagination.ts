import { StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TablePaginationProps {
	/**
	 * The currently visible page (starting with 0).
	 */
	page: number;

	/**
	 * The total number of pages.
	 */
	numberOfPages: number;

	/**
	 * Label text to display
	 */
	label?: React.ReactNode;

	/**
	 * Function to execute on page change.
	 */
	onPageChange: (page: number) => void;
	/**
	 * The total number of rows.
	 */

	count: number;
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

export const TablePaginationDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TablePagination
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TablePagination = getComponent<TablePaginationProps>('TablePagination');
TablePagination.defaultProps = TablePaginationDefaultProps;
