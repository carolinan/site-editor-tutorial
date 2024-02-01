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
		name: 'navigationPages',
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
					{ __( 'Navigation' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'This panel shows a list of all the menus on your site.' ) }
					<br /><br />
					{ __( 'Your menus are separate from your navigation blocks. A menu can be used in more than one navigation block.' ) }
					<br /><br />
					{ __( 'Click on a menu to open it.' ) }
				</p>
			</>
		),
	},
];
