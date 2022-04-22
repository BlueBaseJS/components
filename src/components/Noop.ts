import { getComponent } from '@bluebase/core';
import React from 'react';

export interface NoopProps {
	children?: React.ReactNode;
}

export const Noop = getComponent<NoopProps>('Noop');
