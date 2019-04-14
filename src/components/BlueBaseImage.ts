import { Omit, getComponent } from '@bluebase/core';
import { ImageProps } from './Image';

export interface BlueBaseImageProps extends Omit<ImageProps, 'source'> {
	/** BlueBase registry key */
	resolve?: string | string[]
	source?: ImageProps['source']
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
