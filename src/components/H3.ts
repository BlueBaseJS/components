import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface H3Props extends TextProps {}

export const H3 = getComponent<H3Props>('H3');
