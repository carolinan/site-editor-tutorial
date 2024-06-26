/**
 * WordPress dependencies
 */
// Note: Unlocking private API's require using the current version of Gutenberg!
// See src/unlock.js for more information.
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { unlock } from './unlock';
const { useLocation } = unlock( routerPrivateApis );

// Select the tutorial page based on the current location.
export const SelectPages = ( Pages, records ) => {
	let screen = '';
	let tutorials = '';

	// Get the current location
	const location = useLocation();
	const search = location.search;
	const params = new URLSearchParams( search );
	const postID = params.get( 'postId' );
	const canvas = params.get( 'canvas' );
	const postType = params.get( 'postType' );
	let path = params.get( 'path' );

	// Currently unused, but likely to be needed when more tutorials pages are added.
	// const pathname = location.pathname;

	if ( ! path && ! canvas && ! postID && ! postType ) {
		//console.log(' page-selector.js: No path or canvas');
		path = 'Entry';
	}

	switch ( path || postType ) {
		case 'wp_navigation':
			// If postID is set, or there is only one menu,
			// show the tutorial for the navigation details.
			if (
				postID ||
				( Array.isArray( records ) && records.length === 1 )
			) {
				tutorials = Pages.NavigationDetails;
				screen = 'NavigationDetails';
			} else {
				// Otherwise, show the tutorial for the navigation screen, with the list of menus.
				tutorials = Pages.Navigation;
				screen = 'Navigation';
			}
			break;
		case '/wp_global_styles':
			/**
			 * /wp_global_styles is the page with the left hand menu where you preview style variations.
			 */
			tutorials = Pages.Styles;
			screen = 'Styles';
			break;
		case 'page':
			// /page is the page previews and the site editor menu with the list of pages.
			// Note that there is no "page details" tutorial because it is being removed from the site editor.
			tutorials = Pages.Pages;
			screen = 'Pages';
			break;
		case 'wp_template':
			// /wp_templateedit is the editor page for a template.
			// /wp_template is the preview page for a template.
			tutorials = Pages.Templates;
			screen = 'Templates';
			break;
		case 'wp_block':
			tutorials = Pages.Patterns;
			screen = 'Patterns';
			break;
		case 'edit':
			tutorials = Pages.editorCanvas;
			screen = 'editorCanvas';
			break;
		case 'Entry':
			tutorials = Pages.Entry;
			screen = 'Entry';
	}
	return { tutorials, screen };
};
