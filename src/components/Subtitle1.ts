import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface Subtitle1Props extends TextProps {}

export const Subtitle1 = getComponent<Subtitle1Props>('Subtitle1');
