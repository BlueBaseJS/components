import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface OverlineProps extends TextProps {}

export const Overline = getComponent<OverlineProps>('Overline');
