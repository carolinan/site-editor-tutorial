/**
 * This file contains the content for the templates tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const templatesPages = [
	{
		anchor: '.edit-site-layout__sidebar-region',
		verticalplacement: 'top',
		horizontalplacement: 'right',
		offsetX: 10,
		offsetY: 10,
		highlight: false,
		showArrow: true,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Templates' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'You have opened the template settings page.' )
					}
				</p>
			</>
		),
	},
];
