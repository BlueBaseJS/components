import { getComponent } from '../getComponent';

export interface TabsProps {
	/** If `true`, the tabs will be centered. This property is intended for large views. */
	centered?: boolean;

	/** The content of the component. */
	children: React.ReactNode;

	/** Determines the color of the indicator. */
	indicatorColor?: 'primary' | 'secondary';

	/** Callback fired when the value changes. */
	onChange?: (event: object, value: number) => void;

	/**
	 * The value of the currently selected Tab. If you don't want any selected
	 * Tab, you can set this property to false.
	 */
	value: any;
}

export const TabsDefaultProps = {
	centered: false,
	indicatorColor: 'secondary' as TabsProps['indicatorColor'],
};

// tslint:disable: jsdoc-format
/**
 * # 🗂 Tabs
 * A simple view that renders tabs.
 *
 * ## Usage
 *
 * ```jsx
<Tabs value={value} onChange={this.handleChange}>
	<Tab label="Item One" />
	<Tab label="Item Two" />
	<Tab label="Item Three" />
</Tabs>```
 */
export const Tabs = getComponent<TabsProps>('Tabs');

Tabs.defaultProps = TabsDefaultProps;
