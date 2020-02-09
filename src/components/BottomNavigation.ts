import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface BottomNavigationProps {
	/** If true, all BottomNavigationActions will show their labels */
	showLabels?: boolean;

	/** The content of the component. */
	children: React.ReactNode;

	/** Callback fired when the value changes. */
	onChange?: (event: object, value: number) => void;

	/**
	 * The value of the currently selected Tab. If you don't want any selected
	 * Tab, you can set this property to false.
	 */
	value?: any;

	style?: ViewStyle;
}

export const BottomNavigationDefaultProps = {
	showLabels: false,
};

// tslint:disable: jsdoc-format
/**
 * # 🗂 BottomNavigation
 * A simple view that renders tabs.
 *
 * ## Usage
 *
 * ```jsx
<BottomNavigation
	value={value}
	onChange={this.handleChange}
	showLabels
>
	<BottomNavigationAction label="Recents" />
	<BottomNavigationAction label="Favorites" />
	<BottomNavigationAction label="Nearby" />
</BottomNavigation>```
 */
export const BottomNavigation = getComponent<BottomNavigationProps>('BottomNavigation');

BottomNavigation.defaultProps = BottomNavigationDefaultProps;
