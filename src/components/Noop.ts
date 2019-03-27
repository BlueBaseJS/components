import React from 'react';
import { getComponent } from '../getComponent';

export interface NoopProps {
	children?: React.ReactNode;
}

export const Noop = getComponent<NoopProps>('Noop');
