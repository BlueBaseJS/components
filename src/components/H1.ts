import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface H1Props extends TextProps {}

export const H1 = getComponent<H1Props>('H1');
