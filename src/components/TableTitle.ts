import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TableTitleProps {
	active?: boolean;
	direction?: 'asc' | 'dsc';
	onPress?: () => void;
	hideSortIcon?: boolean;
	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableTitleDefaultProps: Partial<TableTitleProps> = {
	direction: 'dsc',
};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableTitle
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TableTitle = getComponent<TableTitleProps>('TableTitle');
TableTitle.defaultProps = TableTitleDefaultProps;
