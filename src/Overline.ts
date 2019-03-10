import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface OverlineProps extends TextProps {}

export const Overline = getComponent<OverlineProps>('Overline');
