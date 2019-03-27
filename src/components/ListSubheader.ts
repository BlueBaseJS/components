import React from 'react';
import { TextProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface ListSubheaderProps extends TextProps {
	children: React.ReactNode;
	inset?: boolean;
}

export const ListSubheader = getComponent<ListSubheaderProps>('ListSubheader');
