import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface Subtitle1Props extends TextProps {}

export const Subtitle1 = getComponent<Subtitle1Props>('Subtitle1');
