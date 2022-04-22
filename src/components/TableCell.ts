import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

export interface TableCellProps {
	/**
	 * Align the text to the right.
	 * Generally monetary or number fields are aligned to right.
	 */
	numberic?: boolean;

	/** Function to execute on press. */
	onPress?: boolean;

	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableCellDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableCell
 */
export const TableCell = getComponent<TableCellProps>('TableCell');
TableCell.defaultProps = TableCellDefaultProps;
