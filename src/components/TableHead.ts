import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

export interface TableHeadProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export const TableHeadDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🏓 TableHead
 *
 * Data tables allow displaying sets of data.
 *
 */
export const TableHead = getComponent<TableHeadProps>('TableHead');
TableHead.defaultProps = TableHeadDefaultProps;
