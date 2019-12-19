import {
	ImageBackgroundProps as NImageBackgroundProps,
	ImageProps as NImageProps,
} from 'react-native';
import { Omit, getComponent } from '@bluebase/core';

import { ReactNode } from 'react';

export interface BlueBaseImageBackgroundProps extends Omit<NImageBackgroundProps, 'source'> {
	/** Image source or BlueBase registry key */
	source?: NImageProps['source'] | string | string[];
}

// tslint:disable: jsdoc-format
/**
 * # 🖼 BlueBaseImageBackground
 *
 * A drop in replacement for React Native's ImageBackground component.
 * Adds ability to display image stored in BlueBase Asset Registry.
 *
 * ## Usage
 * ```jsx
<BlueBaseImageBackground resolve="Logo"><Content /></BlueBaseImageBackground>
<BlueBaseImageBackground resolve={['LogoSquare', 'Logo']}><Content /></BlueBaseImageBackground>
```
 */
export const BlueBaseImageBackground = getComponent<BlueBaseImageBackgroundProps>(
	'BlueBaseImageBackground'
);

/**
 * Default props for ImageBackground component
 */
export const BlueBaseImageBackgroundDefaultProps = {};
