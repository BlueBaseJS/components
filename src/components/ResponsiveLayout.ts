import { getComponent } from '@bluebase/core';
import React from 'react';

export interface ResponsiveLayoutProps {
	[key: string]: any;

	/**
	 * The default component to render, if a current size component is not given.
	 */
	default: string | React.ComponentType<any>;

	/**
	 * The component to render when the screen size is "xs".
	 */
	xs?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "xs"
	 */
	xsProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "sm".
	 */
	sm?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "sm"
	 */
	smProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "md".
	 */
	md?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "md"
	 */
	mdProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "lg".
	 */
	lg?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "lg"
	 */
	lgProps?: { [key: string]: any };

	/**
	 * The component to render when the screen size is "xl".
	 */
	xl?: string | React.ComponentType<any>;

	/**
	 * The props to pass on to the child compoent when screen size is "xl"
	 */
	xlProps?: { [key: string]: any };
}

/**
 * # ResponsiveLayout
 */
export const ResponsiveLayout = getComponent<ResponsiveLayoutProps>('ResponsiveLayout');
