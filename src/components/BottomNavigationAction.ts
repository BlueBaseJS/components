import { DynamicIconProps } from './DynamicIcon';
import { getComponent } from '../getComponent';

export interface BottomNavigationActionProps {

	/** If true, the BottomNavigationAction will show its label. */
	showLabel?: boolean;

	/** Dynamic Icon Props */
	icon?: DynamicIconProps;

	/** The label element */
	label?: React.ReactNode;

	/** BottomNavigationAction value */
	value?: string;
}

export const BottomNavigationActionDefaultProps = {
};

/**
 * # 🗂 BottomNavigationAction
 * A single tab component in the Bottom Navigation.
 */
export const BottomNavigationAction = getComponent<BottomNavigationActionProps>('BottomNavigationAction');

BottomNavigationAction.defaultProps = BottomNavigationActionDefaultProps;