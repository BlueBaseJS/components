import { StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TableCellProps {
	/**
	 * Align the text to the right.
	 * Generally monetary or number fields are aligned to right.
	 */
	numberic?: boolean;

	/** Function to execute on press. */
	onPress?: boolean;

	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

export const TableCellDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableCell
 */
export const TableCell = getComponent<TableCellProps>('TableCell');
TableCell.defaultProps = TableCellDefaultProps;
