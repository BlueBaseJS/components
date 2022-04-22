import { getComponent } from '@bluebase/core';
import { ViewProps } from 'react-native';

export interface DividerProps extends ViewProps {
	inset?: boolean;
}

export const Divider = getComponent<DividerProps>('Divider');
