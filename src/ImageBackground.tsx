import { ImageProps } from './Image';
import { getComponent } from '@bluebase/core';

export interface ImageBackgroundProps extends ImageProps {

  /* It is used for adding Imagestyles*/
  imageStyle: object,
  /* It is used for adding styles*/
  style: object
}

export const ImageBackground = getComponent<ImageBackgroundProps>('ImageBackground');
