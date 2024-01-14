/**
 * This file contains the content for the Navigation pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const navigationPages = [
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
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation Settings' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'You have opened the navigation settings page.' )
					}
				</p>
				<p className="edit-site-welcome-guide__text">
					{ __( 'The navigation menu shows different options depending on how many menus you have on your website.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					{ __( ' - If you have one menu, you will only see the information and settings for that menu.' ) }
					<br />
					{ __( ' - If you have more than one, you will see a list of all your menus, and selecting a menu will open its individual settings page.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Compared to other settings pages in the Site Editor, you will find that you can not create new menus here. To create a new menu, you need to select or place a navigation block in the editor.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
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
		offsetY: 10,
		highlight: true,
		showArrow: true,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu name' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'If you have more than one menu on your website, this is the name of the menu you are editing.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.sidebar-navigation__more-menu button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation Actions menu' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Under the three dot menu, also known as the actions menu, you can rename, duplicate or delete your menu.' ) }
					<br />
					{ __( 'Deleting a menu does not remove the navigation block from your content. Navigation blocks that used the deleted menu are not visible on the front.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Edit' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Select the edit link (the pen icon) to manage your navigation block settings in the editor.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.block-editor-list-view-block-select-button',
		verticalplacement: 'bottom',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu items' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'These are your menu items. They represent a block or a link to a post or page.' ) }
					<br />
					{ __( 'An example block that can be placed inside your menu is the site logo.' ) }
				</p>
				<p className="edit-site-welcome-guide__text">
					{ __( 'You can click and hold the block to move it to another position.' ) }
					<br />
					{ __( 'Or, you can use the three dot menu to move or remove the block.' ) }
				</p>
			</>
		),
	},
];
