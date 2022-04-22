import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

import { DynamicIconProps } from './DynamicIcon';

export interface TabProps {
	/** If true, the tab will be disabled. */
	disabled?: boolean;

	/** If true, the tab will be active. */
	selected?: boolean;

	/** Dynamic Icon Props */
	icon?: DynamicIconProps;

	/** The label element */
	label?: React.ReactNode;

	/** Tab value */
	value?: string;

	style?: ViewStyle;
	styles?: any;
}

export const TabDefaultProps = {
	disabled: false,
};

/**
 * # 🗂 Tab
 * A single tab component.
 */
export const Tab = getComponent<TabProps>('Tab');

Tab.defaultProps = TabDefaultProps;
