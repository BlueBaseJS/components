import { ImageProperties, ImageSourcePropType, } from 'react-native';
import { getComponent } from '../getComponent';

export interface AvatarProps extends ImageProperties {
	/**
	 * If provided,the component will display image.
	 */
	source?: ImageSourcePropType;

  /**
   * It provides the  size of the avatar.
   */
	size?: number;

  /**
   * It is used to style the avatar.
   */
	style?: object;

  /**
   * It is used to render the avatar in web.
   */
	children?: object;

  /**
   * It is used to render the  root node.
   */

	component?: object;
}


export const Avatar = getComponent<AvatarProps>('Avatar');

