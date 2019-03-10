import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface H5Props extends TextProps {}

export const H5 = getComponent<H5Props>('H5');
