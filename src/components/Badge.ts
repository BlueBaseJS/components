import { StyleProp, TextStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface BadgeProps {
	/**
	 * Whether the badge is visible
	 */
	visible?: boolean;

	/**
	 * The variant to use.
	 */
	variant?: 'standard' | 'dot';

	/**
	 * Content of the `Badge`.
	 */
	children?: string | number;

	style?: StyleProp<TextStyle>;
}

export const BadgeDefaultProps: Partial<BadgeProps> = {
	variant: 'standard',
	visible: true,
};

// tslint:disable: jsdoc-format
/**
 * # 🔴 Badge
 *
 * Badges are small status descriptors for UI elements. A badge consists of a
 * small circle, typically containing a number or other short set of characters,
 * that appears in proximity to another object.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Badge } from '@bluebase/components';

const MyComponent = () => (
  <Badge>3</Badge>
);

export default MyComponent;
```
 */
export const Badge = getComponent<BadgeProps>('Badge');
Badge.defaultProps = BadgeDefaultProps;
