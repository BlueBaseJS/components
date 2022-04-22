import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface H5Props extends TextProps {}

export const H5 = getComponent<H5Props>('H5');
