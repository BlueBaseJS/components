import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface Body1Props extends TextProps {}

export const Body1 = getComponent<Body1Props>('Body1');
