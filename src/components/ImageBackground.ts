import {
	ImageBackgroundProps as NImageBackgroundProps,
	ImageProps as NImageProps,
} from 'react-native';
import { Omit, getComponent } from '@bluebase/core';

export interface ImageBackgroundProps extends Omit<NImageBackgroundProps, 'source'> {
	/** Image source or BlueBase registry key */
	source?: NImageProps['source'] | string | string[];
}

// tslint:disable: jsdoc-format
/**
 * # 🖼 ImageBackground
 *
 * A drop in replacement for React Native's ImageBackground component.
 * Adds ability to display image stored in BlueBase Asset Registry.
 *
 * ## Usage
 * ```jsx
<ImageBackground resolve="Logo"><Content /></ImageBackground>
<ImageBackground resolve={['LogoSquare', 'Logo']}><Content /></ImageBackground>
```
 */
export const ImageBackground = getComponent<ImageBackgroundProps>('ImageBackground');

/**
 * Default props for ImageBackground component
 */
export const ImageBackgroundDefaultProps = {};
