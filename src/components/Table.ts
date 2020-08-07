import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';
import { TableHead } from './TableHead';
import { TablePagination } from './TablePagination';
import { TableRow } from './TableRow';
import { TableTitle } from './TableTitle';
import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface TableProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableDefaultProps = {};

type TableType = React.ComponentType<TableProps> & {
	Body: typeof TableBody;
	Cell: typeof TableCell;
	Footer: typeof TableFooter;
	Head: typeof TableHead;
	Pagination: typeof TablePagination;
	Row: typeof TableRow;
	Title: typeof TableTitle;
};

// tslint:disable: jsdoc-format
/**
 * # 🏓 Table
 *
 * Data tables allow displaying sets of data.
 *
 */
export const Table = getComponent<TableProps>('Table') as TableType;
Table.defaultProps = TableDefaultProps;

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.Pagination = TablePagination;
Table.Row = TableRow;
Table.Title = TableTitle;
