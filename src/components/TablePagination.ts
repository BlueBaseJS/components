import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TablePaginationProps {
	/**
	 * The total number of rows.
	 */
	count: number;

	/**
	 * The currently visible page (starting with 0).
	 */
	page: number;

	/**
	 * Function to execute on page change.
	 */
	onPageChange: (page: number) => void;

	/**
	 * The number of rows per page.
	 */
	rowsPerPage: number;

	/**
	 * Customizes the options of the rows per page select field.
	 * If less than two options are available, no select field will be displayed.
	 */
	rowsPerPageOptions?: number[];

	/**
	 * Callback fired when the number of rows per page is changed.
	 */
	onChangeRowsPerPage?: (rowsPerPage: number) => void;

	style?: ViewStyle;
}

export const TablePaginationDefaultProps: Partial<TablePaginationProps> = {
	rowsPerPageOptions: [10, 25, 50, 100],
};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TablePagination
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TablePagination = getComponent<TablePaginationProps>('TablePagination');
TablePagination.defaultProps = TablePaginationDefaultProps;
