import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface DividerProps extends ViewProps {
	inset?: boolean;
}

export const Divider = getComponent<DividerProps>('Divider');
