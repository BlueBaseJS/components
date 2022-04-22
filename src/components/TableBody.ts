import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

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
