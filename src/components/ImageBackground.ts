import { ImageBackgroundProps as RNImageBackgroundProps, ImageProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface ImageBackgroundProps extends RNImageBackgroundProps {
	source: ImageProps['source'];
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
