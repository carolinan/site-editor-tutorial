/**
 * This just adds the little circle icon when there is more than one page to walk through.
 */

/**
 * WordPress dependencies
 */
import { SVG, Circle } from '@wordpress/primitives';

export const PageControlIcon = () => (
	<SVG width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
		<Circle cx="4" cy="4" r="4" />
	</SVG>
);
