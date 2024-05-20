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
					{ __( 'Here you can create new pages or edit the content of your existing pages inside the Site Editor itself.' ) }
					<br /><br />
					{ __( 'You can preview your page with a page template to see what the page will look like on the front of your site.' ) }
					{ __( ' If your theme has included optional templates, you can also swap your page template and choose a different design.' ) }
					<br /><br />
					<a href="https://wordpress.org/documentation/article/site-editor-pages/" target="_new">{ __( 'Read more about the Site Editor Pages in the documentation.' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__content',
		verticalplacement: 'middle',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: -40,
		showArrow: true,
		arrowPosition: 'left-middle',
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
					{ __( 'This panel has quick links for displaying your pages according to three default filters: All pages, drafts, and trashed pages.' ) }
					<br />
					{ __( 'You can select a filter by clicking on it, or, you can select "All pages" and add your own custom filter.' ) }
				</p>
			</>
		),
	},
	{
		// This only shows when layout: List is used.
		anchor: '.dataviews-view-list',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: -70,
		offsetY: -30,
		showArrow: true,
		arrowPosition: 'left-middle',
		hintType: 'button',
		hintOffsetX: -90,
		hintOffsetY: -30,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'List of pages' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This is the list of pages, sorted according to your filter.' ) }
					<br /><br />
					{ __( 'Close this tutorial window and hover over the page title to see the additional options:.' ) }
					<br /><br />
					{ __( 'Click on the page title or the pen icon to open the page in the editor.' ) }
					<br />
					{ __( 'Click on the Actions menu (the three dots menu) to acess options to duplicate, rename or trash the page.' ) }
					<br />
					{ __( 'Select "View" in the Actions menu to view the page on the front of the site. The page opens in a new tab.' ) }
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
					{ __( 'This frame is a preview of your page. The preview is only available when you are using the list layout.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.dataviews-filters__view-actions button',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: -10,
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
					{ __( 'Add a custom filter here to filter pages by author or status.' ) }
					<br /><br />
				</p>
			</>
		),
	},
];
