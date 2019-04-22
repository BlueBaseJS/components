import { Omit, getComponent } from '@bluebase/core';
import { ImageProps } from './Image';

export interface BlueBaseImageProps extends Omit<ImageProps, 'source'> {
	/**
	 * BlueBase registry key
	 *
	 * @deprecated
	 */
	resolve?: string | string[];

	/** Image source or BlueBase registry key */
	source?: ImageProps['source'] | string | string[];
}

// tslint:disable: jsdoc-format
/**
 * # 🖼 BlueBaseImage
 *
 * A drop in replacement for React Native's Image component.
 * Adds ability to display image stored in BlueBase Asset Registry.
 *
 * ## Usage
 * ```jsx
<BlueBaseImage resolve="Logo" />
<BlueBaseImage resolve={['LogoSquare', 'Logo']} />
```
 */
export const BlueBaseImage = getComponent<BlueBaseImageProps>('BlueBaseImage');
