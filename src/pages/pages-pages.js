/**
 * This file contains the content for the Pages tutorial pages in the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const pagesPages = [
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
					{ __( 'Pages' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{
						__( 'You have opened the pages settings page.' )
					}
				</p>
			</>
		),
	},
];
