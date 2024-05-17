/**
 * WordPress dependencies
 */
// Note: Unlocking private API's require using the current version of Gutenberg!
// See src/unlock.js for more information.
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { unlock } from './unlock';
const { useLocation } = unlock( routerPrivateApis );

export const selectPages = ( Pages, records, isResolving ) => {
	
	let screen = '';
	let tutorials = '';

	 // Get the current location
	const location = useLocation();
	const search = location.search;
	const params = new URLSearchParams(search);
	const postID = params.get('postId');
	const canvas = params.get('canvas');
	let path = params.get('path');

	// Currently unused, but likely to be needed when more tutorials pages are added.
	// const postType = params.get('postType');
	// const pathname = location.pathname;

	if ( ! path && ! canvas ) {
		console.log(' page-selector.js: No path or canvas');
		path = 'entryPages';
	}

	switch ( path ) {
		case '/navigation':
		case 'wp_navigation':
			if ( postID ) {
				// If the post id is set, we are in the editor for a specific menu.
				tutorials = Pages.navigationDetailsPages;
				screen = 'navigationDetailsPages';
			} else {
				if ( isResolving ) {
					tutorials = Pages.navigationPages;
					screen = 'navigationPages';
				} else if (records && records.length !== undefined) {
					const count = records.length;
					// If there is more than one menu, show the list of menus
					if ( count === 1 ) {
						// If there is only one menu, show the details of the menu.
						tutorials = Pages.navigationDetailsPages;
						screen = 'navigationDetailsPages';
					}
				} else { 
					tutorials = Pages.navigationPages;
					screen = 'navigationPages';
				}
			}
			break;
		case '/wp_global_styles':
			/**
			 * Note: /wp_global_stylesedit is an exception because it does not open with
			 * the select styles, just the editor.
			 * 
			 * /wp_global_styles is the page with the left hand menu where you preview style variations.
			 */
			tutorials = Pages.stylesPages;
			screen = 'stylesPages';
			break;
		case '/page':
			// /page is the page previews and the site editor menu with the list of pages.
			// /pageedit is the editor page for a page.
			tutorials = Pages.pagesPages;
			screen = 'pagesPages';
			break;
		case '/wp_template':
			// /wp_templateedit is the editor page for a template.
			// /wp_template is the preview page for a template.
			tutorials = Pages.templatesPages;
			screen = 'templatesPages';
			break;
		case '/patterns':
			tutorials = Pages.patternsPages;
			screen = 'patternsPages';
			break;
		case 'edit':
			tutorials = Pages.editorCanvasPages;
			screen = 'editorCanvasPages';
			break;
		case 'entryPages':
			tutorials = Pages.entryPages;
			screen = 'entryPages';
	}
	return { tutorials, screen };
}
