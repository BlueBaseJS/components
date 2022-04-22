import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

export interface SnackbarProps {
	/**
	 * Whether the Snackbar is currently visible.
	 */
	visible: boolean;

	/**
	 * Label and press callback for the action button. It should contain the following properties:
	 * - `label` - Label of the action button
	 * - `onPress` - Callback that is called when action button is pressed.
	 */
	action?: {
		label: string;
		accessibilityLabel?: string;
		onPress: () => void;
	};

	/**
	 * The duration for which the Snackbar is shown.
	 */
	duration?: number;

	/**
	 * Callback called when Snackbar is dismissed. The `visible` prop needs to be updated when this is called.
	 */
	onDismiss: () => void;

	/**
	 * Text content of the Snackbar.
	 */
	children: React.ReactNode;
	style?: ViewStyle;
}

export const SnackbarDefaultProps = {};

type SnackbarType = React.ComponentType<SnackbarProps> & {
	DURATION_SHORT: number;
	DURATION_MEDIUM: number;
	DURATION_LONG: number;
};

// tslint:disable: jsdoc-format
/**
 * # 🍿 Snackbar
 *
 * Snackbars provide brief feedback about an operation through a message at the bottom of the screen.
 *
 * ## Static Properties:
 *
 * These properties can be accessed on Snackbar by using the dot notation, e.g. Snackbar.DURATION_SHORT.
 *
 * - DURATION_SHORT: Show the Snackbar for a short duration.
 * - DURATION_MEDIUM: Show the Snackbar for a medium duration.
 * - DURATION_LONG: Show the Snackbar for a long duration.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from '@bluebase/components';

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.setState(state => ({ visible: !state.visible }))}
        >
          {this.state.visible ? 'Hide' : 'Show'}
        </Button>
        <Snackbar
          visible={this.state.visible}
          onDismiss={() => this.setState({ visible: false })}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
```
 */
export const Snackbar = getComponent<SnackbarProps>('Snackbar') as SnackbarType;

Snackbar.defaultProps = SnackbarDefaultProps;

Snackbar.DURATION_SHORT = 4000;
Snackbar.DURATION_MEDIUM = 7000;
Snackbar.DURATION_LONG = 10000;
