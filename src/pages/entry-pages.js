/**
 * This file contains the content for the initial tutorial pages in the Site Editor welcome guide.
 * It needs to be split further as the content increases.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { CommandPaletteButton } from '../command-palette-button';

export const entryPages = [
	{
		anchor: '.interface-interface-skeleton__header',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 40,
		offsetY: 40,
		highlight: false,
		showArrow: false,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Welcome to the Site Editor tutorial' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'This walkthrough will introduce the Site Editor interface and features.' )
					}
					<br /><br></br>
					{	__( 'While the tutorial is open, you will not be able to interact with any other elements on the page.' )
					}
					<br /><br />
					{
						__( 'You can close the tutorial by clicking the close button (X) in the top corner, or with the Esc key.' )
					}
				</p>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'This information-box points to the item that it describes. The item is also highlighted with a purple border.' )
					}
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-layout__canvas',
		verticalplacement: 'top',
		horizontalplacement: 'none',
		offsetX: 40,
		offsetY: 40,
		highlight: false,
		highlightborder: true,
		showArrow: false,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">{ __( 'The site preview' ) }</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'The main content of the Site Editor entry screen is a preview of your site.' ) }
					<br />
					{ __( 'The preview changes depending on which template or page you have selected.' ) }
					<br /><br />
					{ __( 'Clicking anywhere on the preview will open the template and make it available for editing. This feature is disabled during this step of the tutorial.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-layout__sidebar-region',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left-middle',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">{ __( 'The Siter Editor Menu' ) }</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'You can use the menu to navigate to different settings screens.' ) }
					<br />
					{ __( 'Positioned at the top, you will find shortcuts and a button that opens the command palette.' ) }
					{ __( 'Below the menu, there is a status message that will notify you of unsaved changes.' ) }
				</p>

			</>
		),
	},
	{
		anchor: '.edit-site-layout__view-mode-toggle',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">{ __( 'The Dashboard link' ) }</h1>
				<p className="edit-site-welcome-guide__text">
					{ createInterpolateElement(
						__(
							'The first link in the top corner of the screen takes you back to the Dashboard. Look for your site logo or the WordPress logo: <InserterIconImage />.'
						),
						{
							InserterIconImage: (
								<img
									alt={ __( 'WordPress logo' ) }
									src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -2 24 24' fill='%23333' width='24' height='24'><path d='M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z' /></svg>"
								/>
							),
						}
					) }
					<br /><br />
					{
						__( 'Depending on which page you are on, the link may also open the Site Editor entry page.' )
					}
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-site-hub__site-title',
		verticalplacement: 'bottom',
		horizontalplacement: 'left',
		offsetX: 0,
		offsetY: 20,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Site title' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This is your site title.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-site-hub__site-view-link',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -4,
		offsetY: 20,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Shortcut to the front of your site' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'Next to the site title is a link that opens the front of your website in a new window.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-site-hub_toggle-command-center',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -4,
		offsetY: 20,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Command Palette' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'A command is a shortcut that you can use to perform common actions, such as opening or creating new posts and pages or opening the front of your site in a new browser window.' ) }
					<br /><br />
					{ __( 'The button with the maginfying glass opens the command palette.' ) }
					<br />
					{ __( 'You can also open the command palette by pressing Command/Ctrl + K.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Go ahead and open the command palette and type "view site" in the search field:' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					<CommandPaletteButton />
				</p>

			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 0,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'The back button' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This button takes you back one level in the menu.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-item',
		nth: 0,
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Allows you to browse your menus and make basic changes.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fnavigation" className="components-button is-primary">{ __( 'Skip ahead to the Navigation tutorial' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-item',
		nth: 1,
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Styles' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Provides a direct access to edit your site’s style variations.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fwp_global_styles" className="components-button is-primary">{ __( 'Skip ahead to the Styles tutorial' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-item',
		nth: 2,
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Pages' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Edit the content of your pages inside the Site Editor itself.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fpage" className="components-button is-primary">{ __( 'Skip ahead to the Pages tutorial' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-item',
		nth: 3,
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Templates' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Manage the different layouts for your site.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fwp_template" className="components-button is-primary">{ __( 'Skip ahead to the Templates tutorial' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-item',
		nth: 4,
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Patterns' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Manage your synced patterns and template parts here.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fpatterns" className="components-button is-primary">{ __( 'Skip ahead to the Pattern tutorial' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-save-hub',
		verticalplacement: 'top',
		horizontalplacement: 'left',
		offsetX: 10,
		offsetY: -140,
		highlight: true,
		showArrow: true,
		arrowPosition: 'bottom-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Status messages' ) }
				</h1>
			</>
		),
	},
	{
		anchor: '.interface-interface-skeleton__header',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 40,
		offsetY: 40,
		highlight: false,
		showArrow: false,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Next steps' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'Choose your next tutorial:' )
					}
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fnavigation" className="components-button is-primary">{ __( 'Navigation' ) }</a>
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fwp_global_styles" className="components-button is-primary">{ __( 'Styles' ) }</a>
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fpage" className="components-button is-primary">{ __( 'Pages' ) }</a>
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fwp_template" className="components-button is-primary">{ __( 'Templates' ) }</a>
				</p>
				<p className="edit-site-welcome-guide__text">
					<a href="/wp-admin/site-editor.php?path=%2Fpatterns" className="components-button is-primary">{ __( 'Patterns' ) }</a>
				</p>
			</>
		),
	},
];
