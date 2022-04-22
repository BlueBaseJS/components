import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface H4Props extends TextProps {}

export const H4 = getComponent<H4Props>('H4');
