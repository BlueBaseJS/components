import React from 'react';
import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface ListSectionProps extends ViewProps {
	children?: React.ReactNode;
}

export const ListSection = getComponent<ListSectionProps>('ListSection');
