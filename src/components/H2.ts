import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface H2Props extends TextProps {}

export const H2 = getComponent<H2Props>('H2');
