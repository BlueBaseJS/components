import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface CaptionProps extends TextProps {}

export const Caption = getComponent<CaptionProps>('Caption');
