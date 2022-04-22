import { getComponent } from '@bluebase/core';
import React from 'react';
import { TextProps } from 'react-native';

export interface ListSubheaderProps extends TextProps {
	children: React.ReactNode;
	inset?: boolean;
}

export const ListSubheader = getComponent<ListSubheaderProps>('ListSubheader');
