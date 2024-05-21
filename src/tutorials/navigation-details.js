/**
 * This file contains the content for the Navigation details screen in the Site Editor,
 * the screen with the information about the specific menu.
 * This URL contains the post id for the menu.
 * Example: wp-admin/site-editor.php?postId=4&path=%2Fnavigation
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 * 
 * TODO: When user deletes all menus, WP creates a placeholder menu that does not have a title,
 * and the hint about the menu name is displayed, when it should not.
 * See if there is another anchor that could be used.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const NavigationDetails = [
	{
		anchor: '.edit-site-sidebar-navigation-screen__content', // Required
		label: __( 'Navigation Details' ),
		name: 'navigationDetailsPages',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation Details' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This screen shows the name of your chosen menu, and a list of all blocks that you have placed inside it.' ) }
					<br /><br />
					{ __( 'Here you can rename, duplicate and delete your menu, and move and remove the blocks. To add new blocks you need to select the Edit option.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__title',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: -10,
		offsetY: 10,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu name' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This is the name of the menu you are editing.' ) }
					<br/>
					{ __( 'To rename the menu, select the option in the Actions menu.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.sidebar-navigation__more-menu button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 0,
		offsetY: 20,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 10,
		hintOffsetY: 0,
		hintSize: 16,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Navigation Actions menu' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Under the three dot menu, also known as the Actions menu, you can rename, duplicate or delete your menu.' ) }
					<br /><br />
					{ __( 'Here you can also access the Edit option, which opens the menu in the editor. From there, you can add new blocks to your menu.' ) }
					<br /><br />
					{ __( 'When you delete a menu, it is no longer visible on the front of your site.' ) }
				</p>
			</>
		),
	},
	{
		anchor: '.block-editor-list-view-leaf',
		verticalplacement: 'middle',
		horizontalplacement: 'right',
		offsetX: 30,
		offsetY: -80,
		showArrow: true,
		arrowPosition: 'left-middle',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 40,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Menu items' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Each menu item is a block. The icon on the left shows the block type, for example post, page, page list, custom link, or site logo.' ) }
					<br /><br />
					{ __( 'An arrow icon before the block indicates that the block has a submenu. Clicking on the arrow expands the submenu.' ) }
					<br /><br />
					{ __( 'You can click and hold to drag the block to move it to another position in the menu.' ) }
					<br /><br />
					{ __( 'Each block has an Options menu where you can move or remove the block. Page blocks also have links that opens the page in the Site Editor.' ) }
					<br />
					{ __( 'To see the Options menu, you must first close this tutorial window and hover over the block.' ) }
				</p>
			</>
		),
	},
];
