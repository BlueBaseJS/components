import { getComponent } from '@bluebase/core';

import { ComponentStateProps } from './ComponentState';

export interface EmptyStateProps extends ComponentStateProps {
	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

export const EmptyState = getComponent<EmptyStateProps>('EmptyState');
