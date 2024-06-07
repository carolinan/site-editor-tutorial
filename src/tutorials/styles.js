/**
 * This file contains the content for the Styles screen in the Site Editor,
 * the screen with the list of global style variations.
 * Example: wp-admin/site-editor.php?path=%2Fwp_global_styles
 *
 * The first item is displayed automatically if the page is the point of entry,
 * or when the page is refreshed.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const Styles = [
	{
		anchor: '.edit-site-layout__content',
		label: __( 'Styles' ),
		name: 'Styles',
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Styles' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'Styles can change the look and feel of your site with a single setting, by switching color palettes and fonts.'
					) }
					<br />
					<br />
					{ __(
						'Style presets are optional and included in your block theme. Because of that, the styles and the number of options to choose from varies from theme to theme.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__actions button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 0,
		offsetY: 10,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 10,
		hintOffsetY: 0,
		hintSize: 14,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Style Book' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'The eye icon opens the Style book, a preview of what a the most common blocks will look like with a style variation applied.'
					) }
					<br />
					{ __(
						'Click on the icon again to see the preview of the site instead.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-sidebar-navigation-screen__actions button',
		verticalplacement: 'bottom',
		horizontalplacement: 'none',
		offsetX: 36,
		offsetY: 10,
		showArrow: true,
		arrowPosition: 'top-left',
		hintType: 'button',
		hintOffsetX: 46,
		hintOffsetY: 0,
		hintSize: 14,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Edit Styles' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'If you click on the pen icon (Edit styles), you will close the side panel and open the Site Editor with the Style settings opened.'
					) }
					<br />
					{ __(
						'That is where you can change the site wide color palette, typography, and spacing.'
					) }
				</p>
			</>
		),
	},
	{
		anchor: '.edit-site-global-styles-variation-container',
		verticalplacement: 'middle',
		horizontalplacement: 'right',
		offsetX: 60,
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
					{ __( 'Style Variations (presets)' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'This list shows the style variations enabled for your theme.'
					) }
					<br />
					{ __(
						'There are three types of style presets: General (which can change both colors, typography and spacing), Colors, and Typography. You may need to scroll to see all the presets.'
					) }
					<br />
					<br />
					{ __(
						'Click on a preset to preview it. You can combine different presets to create a uniqe style.'
					) }
					<br />
					<br />
					{ __(
						'Next, if you have selected a style that you want to save, click on the large "Save" button at the bottom of the panel.'
					) }
				</p>
			</>
		),
	},
	// This element only appears when the user has saved a style variation.
	{
		anchor: '.edit-site-sidebar-navigation-screen-details-footer',
		verticalplacement: 'middle',
		horizontalplacement: 'right',
		offsetX: 20,
		offsetY: -95,
		showArrow: true,
		arrowPosition: 'left-middle',
		hintType: 'button',
		hintOffsetX: 0,
		hintOffsetY: 0,
		hintSize: 14,
		content: (
			<>
				<h1 className="edit-site-welcome-guide__heading">
					{ __( 'Style revisions' ) }
				</h1>
				<p className="edit-site-welcome-guide__text">
					{ __(
						'Here you can see when your styles were last modified.'
					) }
					<br />
					{ __(
						'Click on the icon with the timer to open a timeline over your style changes.'
					) }
				</p>
			</>
		),
	},
];
