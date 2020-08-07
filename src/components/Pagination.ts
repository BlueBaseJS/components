import { getComponent } from '@bluebase/core';

export interface PaginationProps {
	/** The total number of pages. */
	count?: number;

	/** If true, the pagination component will be disabled. */
	disabled?: boolean;

	/** Callback fired when the page is changed. */
	onChange?: (page: number) => void;

	/** The current page. */
	page?: number;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;

	[key: string]: any;
}

/**
 * Default props for Pagination component
 */
export const PaginationDefaultProps = {
	count: 1,
	disabled: false,
	page: 1,
};

/**
 * 📑 The Pagination component enables the user to select a specific
 * page from a range of pages.
 *
 * ## Usage
 * ```jsx
 * <Pagination count={10} />
 * ```
 */
export const Pagination = getComponent<PaginationProps>('Pagination');
Pagination.defaultProps = PaginationDefaultProps;
