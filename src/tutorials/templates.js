/**
 * This file contains the content for the Templates screen in the Site Editor,
 * the screen with the list of templates.
 * Example: wp-admin/site-editor.php?postType=wp_template
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const Templates = [
	{
		anchor: '.edit-site-layout__content',
		label: __( 'Templates' ),
		name: 'Templates',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Templates' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __( 'Something.' ) }
				</p>
			</>
		),
	},
];
