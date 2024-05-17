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
import { CommandPaletteButton } from '../utils.js';

export const entryPages = [
	{
		anchor: '.edit-site-layout__content',
		label: __( 'Site Editor tutorial intro' ),
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 20,
		offsetY: 20,
		showArrow: false,
		hintType: 'none',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Welcome to the Site Editor Tutorial' ) }
				</h1>
				<h2 className="edit-site-welcome-guide__heading">
					{ __( 'What is the Site Editor?' ) }
				</h2>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'The Site Editor is a WordPress feature where you can view, edit and create templates and patterns that you can use to change the design and layout of your site.' )
					}
					<br /><br />
					{
						__( 'Here you can choose between premade designs, add custom color palettes and fonts.' )
					}
					<br /><br />
					<a href="https://wordpress.org/documentation/article/site-editor/" target="_new">{ __( 'Read more about the Site Editor in the official documentation.' ) }</a>
				</p>
				<h2 className="edit-site-welcome-guide__heading">
					{ __( 'How does the Site Editor tutorial work?' ) }
				</h2>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'The Site Editor is split into several setting screens and panels.' )
					}
					<br />
					{
						__( 'With this guide, you can navigate freely between the Site Editor screens and read helpful hints and tips to get started.' )
					}
					<br />
					{ 
						__( 'Click on the purple hints to find out more about the interface or a feature.' )
					}
					<br /><br />
					{ __( 'You can close the tips with the Esc key, or use the close button.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-layout__canvas',
		label: __( 'The site preview' ),
		verticalplacement: 'top',
		horizontalplacement: 'none',
		offsetX: 40,
		offsetY: 40,
		showArrow: false,
		hintType: 'button',
		hintOffsetX: 22,
		hintOffsetY: 100,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">{ __( 'The site preview' ) }</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'The main content of the Site Editor entry screen is a live preview that matches the front of your site.' ) }
					{ __( ' You can use it to preview your homepage, pages, templates, menus, and template parts.' ) }
					<br /><br />
					{ __( 'Clicking anywhere on the preview will open it in the editor where you can customize your design and add new blocks and patterns.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-layout__view-mode-toggle',
		label: __( 'The Dashboard link' ),
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 10,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 22,
		hintOffsetY: -10,
		hintSize: 18,
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
		anchor: '.edit-site-site-hub__site-view-link',
		label: __( 'Shortcut to the front of your site' ),
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -4,
		offsetY: 20,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 6,
		hintOffsetY: 0,
		hintSize: 18,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Shortcut to the front of your site' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'Next to the site title is a link that opens the front of your site in a new window.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-site-hub_toggle-command-center',
		label: __( 'Command Palette' ),
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -4,
		offsetY: 20,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 7,
		hintOffsetY: 0,
		hintSize: 18,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Command Palette' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'A command is a shortcut that you can use to perform common actions, such as opening or creating new posts and pages.' ) }
					<br /><br />
					{ __( 'The button with the maginfying glass opens the Command Palette.' ) }
					<br />
					{ __( 'You can also open the Command Palette by pressing Command/Ctrl + K.' ) }
					<br /><br />
					{ __( 'Go ahead and open the Command Palette and try it out by typing "view site" in the search field:' ) }
					<br /><br />
					<CommandPaletteButton />
					<br /><br />
					<a href="https://wordpress.org/documentation/article/site-editor-command-palette/" target="_new">{ __( 'Read more in the Command Palette documentation.' ) }</a>
				</p>
			</>
			
		),
	},
	{
		anchor: '.edit-site-sidebar-button',
		label: __( 'The back button' ),
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 0,
		offsetY: 10,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 14,
		hintOffsetY: -5,
		hintSize: 12,
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
		anchor: '#/navigation',
		label: __( 'Navigation' ),
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: -50,
		hintOffsetY: 10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This menu item takes you to the Navigation screen where you can browse and edit your menus.' ) }
					<br /><br />
					{ __( '- Menus decide which links and blocks should show in your menu. A menu can be used inside one or more navigation blocks.' ) }
					<br /><br />
					{ __( '- The navigation block decides where and how your menu is displayed. For example, you can place a navigation block in your header, assign your menu, and change the colors, font size and font family.' ) }
					<br /><br />
					<a href="https://wordpress.org/documentation/article/site-editor-navigation/" target="_new">{ __( 'Read more about the Site Editor Navigation in the documentation.' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '#/wp_global_styles',
		label: __( 'Styles' ),
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: -80,
		showArrow: true,
		arrowPosition: 'left-middle',
		hintType: 'button',
		hintOffsetX: -50,
		hintOffsetY: 10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Styles' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Styles can change the look and feel of your site with a single setting, by switching color palettes and fonts.' ) }
					<br /><br />
					{ __( 'Pre-made style variations are optional and included in your block theme. Because of that, the styles and the number of options to choose from varies from theme to theme.' ) }
					<br /><br />
					{ __( 'This menu item provides access to previewing, selecting and editing your site’s style variations.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '#/page',
		label: __( 'Pages' ),
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: -50,
		hintOffsetY: 10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Pages' ) }
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
		anchor: '#/wp_template',
		label: __( 'Templates' ),
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'button',
		hintOffsetX: -50,
		hintOffsetY: 10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Templates' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Templates are used to create the layout and structure for everything that you see on the front of your site: from the front page to the single posts and the 404 page.' ) }
					<br /><br />
					{ __( 'Here you can create new custom templates and manage the different templates for your site.' ) }
					<br />
					{ __( 'You can filter and sort your existing templates, reset changes to theme templates, and rename and delete your custom templates.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '#/patterns',
		label: __( 'Patterns' ),
		verticalplacement: 'middletop',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: -80,
		showArrow: true,
		arrowPosition: 'left-middle',
		hintType: 'button',
		hintOffsetX: -50,
		hintOffsetY: 10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Patterns' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'From this menu you can access and manage your patterns and template parts.' ) }
					<br /><br />
					{ __( 'Patterns are blocks that are grouped together to create page sections and other resusable design features.' ) }
					{ __( ' Here you can preview all your patterns by category, search for patterns, and create new patterns.' ) }
					<br /><br />
					{ __( 'Template parts are most commonly used to display your site headers and footers.' ) }
					{ __( ' By using a header template part, you can edit and update the header of all your templates from one location.' ) }
					<br />
					{ __( 'Go here if you want to preview your header and footer designs, or create new ones from scratch.' ) }
					<br /><br />
					<a href="https://wordpress.org/documentation/article/site-editor-patterns/" target="_new">{ __( 'Read more in the documentation.' ) }</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-save-hub',
		label: __( 'Status messages' ),
		verticalplacement: 'top',
		horizontalplacement: 'left',
		offsetX: 10,
		offsetY: -220,
		showArrow: true,
		arrowPosition: 'bottom-left',
		hintType: 'button',
		hintOffsetX: 20,
		hintOffsetY: -10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Status messages' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Status messages show information about unsaved changes that are pending review. For example changes to page content, templates or styles.' ) }
					{ __( ' If the message reads "Saved" then you do not need to take action.' ) }
				</p>
			</>
		),
	},
];
