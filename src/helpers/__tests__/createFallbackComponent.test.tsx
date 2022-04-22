import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import { createFallbackComponent, getComponentWithFallback } from '../createFallbackComponent';

describe('createFallbackComponent', () => {
	it('should show a Fallback state', async () => {
		const Fallback = createFallbackComponent({
			moduleName: '@bluebase/plugin-example',
			name: 'Example',
		});

		const wrapper = mount(
			<BlueBaseApp>
				<Fallback />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, Fallback);

		expect(
			wrapper
				.find('[testID="fallback-name"]')
				.last()
				.text()
		).toBe('Example');

		expect(
			wrapper
				.find('[testID="fallback-module-name"]')
				.last()
				.text()
		).toBe('@bluebase/plugin-example');
	});
});

describe('getComponentWithFallback', () => {
	it('should show a Fallback state', async () => {
		const Sample = getComponentWithFallback<{ foo?: string }>({
			moduleName: '@bluebase/plugin-sample',
			name: 'Sample',
		})('Sample');

		const wrapper = mount(
			<BlueBaseApp>
				<Sample />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, Sample);

		expect(
			wrapper
				.find('[testID="fallback-name"]')
				.last()
				.text()
		).toBe('Sample');

		expect(
			wrapper
				.find('[testID="fallback-module-name"]')
				.last()
				.text()
		).toBe('@bluebase/plugin-sample');
	});
});
