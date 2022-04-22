import { getComponent } from '@bluebase/core';

import { TextProps } from './Text';

export interface CaptionProps extends TextProps {}

export const Caption = getComponent<CaptionProps>('Caption');
