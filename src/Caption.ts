import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface CaptionProps extends TextProps {}

export const Caption = getComponent<CaptionProps>('Caption');
