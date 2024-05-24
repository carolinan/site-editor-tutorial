/**
 * This file contains the content for the Pages screen in the Site Editor,
 * the screen with the list of pages and related options.
 * Example: hwp-admin/site-editor.php?path=%2Fpage
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 *
 * TODO: The documentation on .org should be updated to match the 6.6 release.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const Pages = [
	{
		anchor: '.edit-site-layout__content',
		label: __( 'Pages' ),
		name: 'Pages',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Manage Pages' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'Here you can see all your pages, create new pages, trash, rename and duplicate pages.'
					) }
					<br />
					<br />
					{ __(
						'You can also filter pages by status, author, or search for a specific page.'
					) }
					<br />
					<br />
					<a
						href="https://wordpress.org/documentation/article/site-editor-pages/"
						target="_new"
					>
						{ __(
							'Read more about the Site Editor Pages in the documentation.'
						) }
					</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__content',
		verticalplacement: 'middle',
		horizontalplacement: 'right',
		offsetX: 20,
		offsetY: -14,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Page filters' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This panel has quick links for displaying your pages according to three default filters: All pages, drafts, and trashed pages.'
					) }
					<br />
					<br />
					{ __(
						'You can select one of the filters in the panel, or, you can select "All pages" and add your own custom filter.'
					) }
				</p>
			</>
		),
	},
	{
		// This only shows when layout: List is used.
		anchor: '.dataviews-view-list',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: -10,
		hintOffsetY: -10,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Manage pages: List Layout' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This is the list of pages, sorted according to your filter.'
					) }
					<br />
					<br />
					{ __(
						'Close this tutorial window and hover over the page title to see the page options:'
					) }
					<br />
					{ __(
						'- Click on the page title or the pen icon to open the page in the editor.'
					) }
					<br />
					{ __(
						'- Click on the Actions menu (the three dots menu) to acess options to duplicate, rename or trash the page.'
					) }
					<br />
					{ __(
						'- Select "View" in the Actions menu to view the page on the front of the site. The page opens in a new tab.'
					) }
				</p>
			</>
		),
	},
	{
		// This only shows when layout: Grid is used.
		anchor: '.dataviews-view-grid',
		verticalplacement: 'top',
		horizontalplacement: 'none',
		offsetX: 330,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: 300,
		hintOffsetY: 0,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Manage pages: Grid Layout' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This grid shows your pages, sorted according to your filter.'
					) }
					<br />
					{ __(
						'If your page has a featured image, the image is shown in the grid.'
					) }
					<br />
					<br />
					{ __(
						'Each page has an options menu (the three dot menu) where you can edit, view, duplicate, rename, and trash the page.'
					) }
					<br />
					{ __(
						'The edit option opens the page in the editor where you can make changes. While the view option opens the page on the front of site, in a new browser tab.'
					) }
					<br />
					<br />
					{ __(
						'Each page also has a check box before the title, by checking the boxes, you can trash multiple pages at once.'
					) }
				</p>
			</>
		),
	},
	{
		// This only shows when layout: Table is used.
		anchor: '.dataviews-view-table .dataviews-view-table__row',
		verticalplacement: 'top',
		horizontalplacement: 'none',
		offsetX: 330,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: 300,
		hintOffsetY: 0,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Manage pages: Table Layout' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This is the list of pages, sorted according to your filter.'
					) }
					<br />
					<br />
					{ __(
						'Close this tutorial window and hover over the page title to see the page options:'
					) }
					<br />
					{ __(
						'- Click on the page title or the pen icon to open the page in the editor.'
					) }
					<br />
					{ __(
						'- Click on the Actions menu (the three dots menu) to acess options to duplicate, rename or trash the page.'
					) }
					<br />
					{ __(
						'- Select "View" in the Actions menu to view the page on the front of the site. The page opens in a new tab.'
					) }
				</p>
			</>
		),
	},
	{
		// This only shows when layout: List is used.
		anchor: '.edit-site-visual-editor ',
		verticalplacement: 'middle',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 10,
		hintType: 'button',
		hintOffsetX: 10,
		hintOffsetY: 10,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Page preview' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This frame is a preview of your page. The preview is only available when you are using the list layout.'
					) }
					<br />
					{ __(
						'Click anywhere in the preview to open the page in the editor, where you can make changes to your content.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.dataviews-filters__view-actions button',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 16,
		offsetY: -12,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 14,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Filters' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'Add a custom filter here to filter pages by author or status.'
					) }
				</p>
			</>
		),
	},
	{
		//anchor: '.dataviews-filters__view-actions button',
		//nth: 2, //The first button is the filter, the second is the actions.
		anchor: '#:r3:',
		verticalplacement: 'bottom',
		horizontalplacement: 'left',
		offsetX: -540,
		offsetY: 20,
		showArrow: true,
		arrowPosition: 'top-right',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'View Options' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'With the view options you can customize how you want to display the page information.'
					) }
					<br />
					<br />
					{ __(
						'You can choose between a list, table or a grid layout, decide how many pages to show show at the time, and hide the author or publishing date, '
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.dataviews-filters__view-actions button',
		nth: 2, // On the grid and table layout, the bulk edit is the second button.
		verticalplacement: 'bottom',
		horizontalplacement: 'left',
		offsetX: -540,
		offsetY: 20,
		showArrow: true,
		arrowPosition: 'top-right',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Bulk edit' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'When you have selected mulitple pages you can use bulk edit to trash them.'
					) }
					<br />
					{ __(
						'If your pages are already trashed, you can use the bulk edito to restore them or delete them permanently.'
					) }
				</p>
			</>
		),
	},
];
