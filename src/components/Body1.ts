import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface Body1Props extends TextProps {}

export const Body1 = getComponent<Body1Props>('Body1');
