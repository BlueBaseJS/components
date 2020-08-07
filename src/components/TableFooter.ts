import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TableFooterProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableFooterDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableFooter
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TableFooter = getComponent<TableFooterProps>('TableFooter');
TableFooter.defaultProps = TableFooterDefaultProps;
