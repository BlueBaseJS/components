import { getComponent } from '@bluebase/core';

export interface StackScreenOptions {
	/**
	 * String that can be used as a fallback for headerTitle.
	 */

	title: string;

	/**
	 * Function that given HeaderProps returns a React Element, to display as a header. Setting to null hides header.
	 */
	header: string;

	/**
	 * To set a custom header for all the screens in the navigator, you can specify this option in the screenOptions prop of the navigator.
	 */
	headerTitle: string;

	/**
	 * Whether header title font should scale to respect Text Size accessibility settings. Defaults to false.
	 */

	headerTitleAllowFontScaling: boolean;

	/**
	 * Whether back button title font should scale to respect Text Size accessibility settings. Defaults to false
	 */

	headerBackAllowFontScaling: boolean;

	/**
	 * Function which returns a React Element to display custom image in header's back button. When a function is used, it receives the tintColor in it's argument object. Defaults to Image component with back image source, which is the default back icon image for the platform (a chevron on iOS and an arrow on Android).
	 */
	headerBackImage: () => void;
}

export interface ScreenViewProps {
	/**
	 * The name of the route to render on first load of the navigator.
	 */
	initialRouteName: string;

	/**
	 * Default options to use for the screens in the navigator.
	 */
	screenOptions: object;

	/**
	 * If false, the on screen keyboard will NOT automatically dismiss when navigating to a new screen. Defaults to true.
	 */
	keyboardHandlingEnabled?: boolean;

	/**
	 * Specifies how to display the selection items when the user taps on the picker:
	 *  card - Use the standard iOS and Android screen transitions. This is the default.
	 *  modal - Make the screens slide in from the bottom which is a common iOS pattern. Only works on iOS, has no effect on Android.
	 */
	mode: 'Card' | 'modal';

	/**
	 *  float - Render a single header that stays at the top and animates as screens are changed. This is a common pattern on iOS.
	 * screen - Each screen has a header attached to it and the header fades in and out together with the screen. This is a common pattern on Android.
	 * none - No header will be rendered.
	 */
	headerMode?: 'float' | 'screen' | 'none';
}
export const ScreenView = getComponent<ScreenViewProps>('ScreenView');
