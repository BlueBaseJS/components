import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface H6Props extends TextProps {}

export const H6 = getComponent<H6Props>('H6');
