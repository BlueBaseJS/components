import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface H1Props extends TextProps {}

export const H1 = getComponent<H1Props>('H1');
