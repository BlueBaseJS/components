import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TableBodyProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableBodyDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableBody
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TableBody = getComponent<TableBodyProps>('TableBody');
TableBody.defaultProps = TableBodyDefaultProps;
