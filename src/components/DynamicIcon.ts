import { getComponent } from '@bluebase/core';
import React from 'react';

import { BlueBaseImageProps } from './BlueBaseImage';

export interface DynamicIconProps {
	[key: string]: any;

	/**
	 * If value is:
	 *
	 * - component: Icon is a custom component, and looks for 'component' prop
	 * - icon: Icon is an instance of BB.Components.Icon and looks for 'icon' prop
	 * - image: Icon is an instance of BB.Components.Image and looks for 'source' prop
	 */
	type: 'component' | 'icon' | 'image';

	/**
	 * Used when type is 'component'.
	 * Either a component or a component name (string).
	 * In case of string, it will be fetched from Component Registry.
	 */
	component?: React.ComponentType<any> | string;

	/**
	 * Used when type is 'icon'.
	 * This is the name prop of the BB.Components.Icon component
	 */
	name?: string;

	/**
	 * Used when type is 'image'.
	 * This is the Image source.
	 */
	source?: BlueBaseImageProps['source'];

	/**
	 * Icon size. Defaults to 40
	 */
	size?: number;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

// tslint:disable: jsdoc-format
/**
 * # 🗿 DynamicIcon
 *
 * An enhanced Icon that can render any of the following:
 * - BB.Components.Icon
 * - BB.Components.Image
 * - A custom component
 *
 * ## Usage
```jsx
<DynamicIcon
	type="image"
	size={250}
	source={{ uri: 'https://picsum.photos/200' }}
/>
```
 */
export const DynamicIcon = getComponent<DynamicIconProps>('DynamicIcon');
