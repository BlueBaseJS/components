import { ImageBackgroundProps as BaseProps } from 'react-native';
import { getComponent } from '@bluebase/core';


export const ImageBackground = getComponent<ImageBackgroundProps>('ImageBackground');

/**
 * Default props for ImageBackground component
 */
export const ImageBackgroundDefaultProps = {};

export interface ImageBackgroundProps extends BaseProps {
	/** Size of the icon. */
	style:{
		width:number,
		height:number
	}
}
