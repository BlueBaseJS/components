import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface H4Props extends TextProps {}

export const H4 = getComponent<H4Props>('H4');
