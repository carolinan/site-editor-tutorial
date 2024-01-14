/**
 * This file contains the content for the patterns tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const patternsPages = [
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
					{ __( 'Patterns' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'You have opened the patterns settings page.' )
					}
				</p>
			</>
		),
	},
];
