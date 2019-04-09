import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface Body1Props extends TextProps {}

export const Body1 = getComponent<Body1Props>('Body1');
