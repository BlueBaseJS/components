import { DataObserverProps } from './DataObserver';
import { ErrorObserverProps } from './ErrorObserver';
import { MaybeRenderPropChildren } from '../utils/Components';
import { WaitObserverProps } from './WaitObserver';
import { getComponent } from '../getComponent';

export interface StatefulComponentProps extends DataObserverProps, ErrorObserverProps, WaitObserverProps {

	// Components
	component?: React.ComponentType<any>;
	loadingComponent?: React.ComponentType<any>;
	emptyComponent?: React.ComponentType<any>;

	children?: MaybeRenderPropChildren;

  /**
   * Used to locate this view in end-to-end tests.
   */
	testID?: string,
}

/**
 * # 👨‍🎨 StatefulComponent
 *
 * This is a swiss army knife component. Intended to be used as a single source of UI
 * state management. It shows empty, loading, error or data states based on the given props.
 *
 * ## Usage
 * ```jsx
 * <StatefulComponent data={data} loading={true} delay={200} timeout={10000}>
 *  <Text>Content</Text>
 * </StatefulComponent>
 * ```
 */
export const StatefulComponent = getComponent<StatefulComponentProps>('StatefulComponent');
