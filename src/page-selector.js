
export const selectPages = ( Pages, pageSelector, postIDParam, records, isResolving ) => {
	/*
	* This would have been easier if I could have just used useLocation()
	* and useHistory() but they are private.
	* Locate the tutorial pages based on the URL.
	*/
	let pages = '';

	switch ( pageSelector ) {
		case '/navigation':
		case 'wp_navigation':
			if ( postIDParam ) {
				// If the post id is set, we are in the editor for a specific menu.
				pages = Pages.navigationDetailsPages;
			} else {
				let count = 0;

				if ( isResolving ) {
					pages = Pages.navigationPages;
				} else if (records && records.length !== undefined) {
					count = records.length;
					// If there is more than one menu, show the list of menus
					if ( count > 1 ) {
						pages = Pages.navigationPages;
					} else {
						// If there is only one menu, show the details of the menu.
						pages = Pages.navigationDetailsPages;
					}
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
			pages = Pages.stylesPages;
			break;
		case '/page':
			// /page is the page previews and the site editor menu with the list of pages.
			// /pageedit is the editor page for a page.
			pages = Pages.pagesPages;
			break;
		case '/wp_template':
			// /wp_templateedit is the editor page for a template.
			// /wp_template is the preview page for a template.
			pages = Pages.templatesPages;
			break;
		case '/patterns':
			pages = Pages.patternsPages;
			break;
		case 'edit':
			pages = Pages.editorCanvasPages;
			break;
		case 'entryPages':
			pages = Pages.entryPages;
	}
	return pages;
}
