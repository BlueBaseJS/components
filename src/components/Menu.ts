import { MenuItem, MenuItemProps } from './MenuItem';
import { StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '../getComponent';

export interface MenuProps {
	/**
	 * Whether the Menu is currently visible.
	 */
	visible: boolean;

	/**
	 * The anchor to open the menu from. In most cases, it will be a button that opens the manu.
	 */
	anchor: React.ReactNode;

	/**
	 * Callback called when Menu is dismissed. The `visible` prop needs to be updated when this is called.
	 */
	onDismiss: () => void;

	/**
	 * Content of the `Menu`.
	 */
	children: React.ReactNode;

	style: StyleProp<ViewStyle>;
}

type MenuType = React.ComponentType<MenuProps> & { Item: React.ComponentType<MenuItemProps> };

/**
 */
// tslint:disable: jsdoc-format
/**
 * # 📋 Menu
 *
 * Menus display a list of choices on temporary elevated surfaces.
 * Their placement varies based on the element that opens them.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Button, Menu, Divider, View } from '@bluebase/components';

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _openMenu = () => this.setState({ visible: true });

  _closeMenu = () => this.setState({ visible: false });

  render() {
    return (
      <View>
        <Menu
          visible={this.state.visible}
          onDismiss={this._closeMenu}
          anchor={
            <Button onPress={this._openMenu}>Show menu</Button>
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    );
  }
}
```
 */
export const Menu = getComponent<MenuProps>('Menu') as MenuType;
Menu.Item = MenuItem;

/**
 * Default props for Menu component
 */
export const MenuDefaultProps = {
	mode: 'default',
};
