import { getComponent } from '@bluebase/core';

export interface PluginIconProps {
	[key: string]: any;

	/** Plugin key */
	id: string;

	/** Icon size */
	size?: number;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

export const PluginIcon = getComponent<PluginIconProps>('PluginIcon');
