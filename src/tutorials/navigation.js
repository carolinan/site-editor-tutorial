/**
 * This file contains the content for the Navigation screen in the Site Editor,
 * the screen with the list of menus.
 * Example: wp-admin/site-editor.php?path=%2Fnavigation
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const Navigation = [
	{
		anchor: '.edit-site-sidebar-navigation-screen__content', // Required
		label: __( 'Navigation' ),
		name: 'Navigation',
		showArrow: false,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'The Navigation screen is where you can browse and edit your menus.'
					) }
					<br />
					<br />
					{ __(
						'- Menus decide which links and blocks should show in your menu. A menu can be used inside one or more navigation blocks.'
					) }
					<br />
					<br />
					{ __(
						'- The navigation block decides where and how your menu is displayed. For example, you can place a navigation block in your header, assign your menu, and change the colors, font size and font family.'
					) }
					<br />
					<br />
					<a
						href="https://wordpress.org/documentation/article/site-editor-navigation/"
						target="_new"
					>
						{ __(
							'Read more about the Site Editor Navigation in the documentation.'
						) }
					</a>
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__content',
		label: __( 'Navigation' ),
		verticalplacement: 'middle',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 0,
		showArrow: true,
		arrowPosition: 'left',
		hintType: 'border',
		hintOffsetX: -50,
		hintOffsetY: 10,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This panel shows a list of all the menus on your site.'
					) }
					<br />
					{ __( 'Click on a menu to open it.' ) }
				</p>
			</>
		),
	},
];
