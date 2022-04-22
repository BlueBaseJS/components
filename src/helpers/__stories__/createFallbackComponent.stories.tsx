import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { createFallbackComponent, getComponentWithFallback } from '../createFallbackComponent';

const Fallback = createFallbackComponent({
	moduleName: '@bluebase/plugin-example',
	name: 'Example',
});

const Sample = getComponentWithFallback<{ foo?: string }>({
	moduleName: '@bluebase/plugin-sample',
	name: 'Sample',
})('Sample');

storiesOf('createFallbackComponent', module).add('Basic Example', () => <Fallback />);

storiesOf('getComponentWithFallback', module).add('Basic Example', () => <Sample />);
