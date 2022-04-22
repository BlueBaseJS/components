import { getComponent } from '@bluebase/core';
import React from 'react';

import { IconProps } from './Icon';

export interface DrawerItemProps {
	title: React.ReactNode;
	icon?: IconProps;
	right?: React.ReactNode;
	onPress?: () => void;
	active?: boolean;
	disabled?: boolean;
}

export const DrawerItem = getComponent<DrawerItemProps>('DrawerItem');
