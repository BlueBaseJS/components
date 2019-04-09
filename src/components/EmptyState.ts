import { ComponentStateProps } from './ComponentState';
import { getComponent } from '../getComponent';

export interface EmptyStateProps extends ComponentStateProps {
	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

export const EmptyState = getComponent<EmptyStateProps>('EmptyState');
