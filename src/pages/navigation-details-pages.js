/**
 * This file contains the content for the single (details) Navigation pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const navigationDetailsPages = [
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
					{ __( 'This is the name of the menu you are editing.' ) }
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
		anchor: '.block-editor-list-view-block-select-button',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: -10,
		offsetY: 10,
		highlight: true,
		showArrow: true,
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
					<a href="/wp-admin/site-editor.php?path=%2Fnavigation" className="components-button is-primary">{ __( 'Navigation' ) }</a>&nbsp;
					<a href="/wp-admin/site-editor.php?path=%2Fwp_global_styles" className="components-button is-primary">{ __( 'Styles' ) }</a>&nbsp;
					<a href="/wp-admin/site-editor.php?path=%2Fpage" className="components-button is-primary">{ __( 'Pages' ) }</a>&nbsp;
					<a href="/wp-admin/site-editor.php?path=%2Fwp_template" className="components-button is-primary">{ __( 'Templates' ) }</a>&nbsp;
					<a href="/wp-admin/site-editor.php?path=%2Fpatterns" className="components-button is-primary">{ __( 'Patterns' ) }</a>&nbsp;
				</p>
			</>
		),
	},
];
