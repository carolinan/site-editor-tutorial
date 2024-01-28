/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const nextSteps = {
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
};
