import { DynamicIconProps } from './DynamicIcon';
import { getComponent } from '@bluebase/core';

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

	/** Tab styles */
	styles?: object;

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
