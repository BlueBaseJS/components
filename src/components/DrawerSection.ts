import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewProps } from 'react-native';

export interface DrawerSectionProps extends ViewProps {
	children?: React.ReactNode;
	title?: string;
}

export const DrawerSection = getComponent<DrawerSectionProps>('DrawerSection');
