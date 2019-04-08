import { DynamicIconProps } from './DynamicIcon';
import { getComponent } from '../getComponent';

export interface TabProps {
	/** If true, the tab will be disabled. */
	disabled?: boolean;

	/** Dynamic Icon Props */
	icon?: DynamicIconProps;

	/** The label element */
	label?: React.ReactNode;

	/** Tab value */
	value?: string;
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
