import React from 'react';
import { ViewProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface DrawerSectionProps extends ViewProps {
	children?: React.ReactNode;
	title?: string;
}

export const DrawerSection = getComponent<DrawerSectionProps>('DrawerSection');
