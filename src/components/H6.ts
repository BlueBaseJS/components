import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface H6Props extends TextProps {}

export const H6 = getComponent<H6Props>('H6');
