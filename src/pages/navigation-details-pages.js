/**
 * This file contains the content for the single (details) Navigation pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { nextSteps } from './next-steps';

export const navigationDetailsPages = [
	{
		anchor: '.edit-site-layout__sidebar-region',
		name: 'navigationDetailsPages',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left-middle',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation Details' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This panel shows the name of your menu, and a list of all its blocks.' ) }
					<br />
					{ __( 'Here you can rename, duplicate and delete your menu, and move and remove the blocks. To add new blocks you need to select the Edit option.' ) }
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
					{ __( 'This button takes you back one level in the sidebar menu.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__title',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 20,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu name' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This is the name of the menu you are editing.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.sidebar-navigation__more-menu button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -3,
		offsetY: 20,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation Actions menu' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Under the three dot menu, also known as the actions menu, you can rename, duplicate or delete your menu.' ) }
					<br /><br />
					{ __( 'When you delete a menu, it is no longer visible on the front of your site.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-button',
		nth: 1,
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -3,
		offsetY: 20,
		highlight: true,
		showArrow: true,
		arrowPosition: 'top-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Edit' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Select the edit button (the pen icon) to open the navigation block in the editor.' ) }
					<br />
					{ __( 'Use this option to change styles or to add new blocks to your menu.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen-navigation-menus__content',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu items' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This is the list of all the blocks that you have added to your menu.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.block-editor-list-view-leaf',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 30,
		offsetY: 0,
		highlight: true,
		showArrow: true,
		arrowPosition: 'left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu item' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Each menu item is a block. The icon on the left shows the block type, for example post, page, custom link, or site logo.' ) }
					<br />
					{ __( 'The text matches the link text in the menu on the front of your site. For example the page title.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					{ __( 'You can click and hold the block to move it to another position.' ) }
					<br />
					{ __( 'Or, you can use the three dot menu to move or remove the block.' ) }
					<br /><br />
					{ __( 'You can expand submenus by clicking on the arrow before the icon.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-save-hub',
		verticalplacement: 'top',
		horizontalplacement: 'left',
		offsetX: 10,
		offsetY: -220,
		highlight: true,
		showArrow: true,
		arrowPosition: 'bottom-left',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Status messages' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Status messages show information about unsaved changes that are pending review. For example if you have moved a menu item.' ) }
					{ __( ' If the message reads "Saved" then you do not need to take action.' ) }
				</p>
			</>
		),
	},
	nextSteps,
];
