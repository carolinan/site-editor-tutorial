<?php
/**
 * Plugin Name:       Site Editor Tutorial
 * Description:       A tutorial for the Site Editor.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Carolina
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       site-editor-tutorial
 *
 * @package           create-block
 */

/*
https://floating-ui.com/docs/react#positioning
/gutenberg/packages/components/src/popover/index.tsx
https://github.com/WordPress/gutenberg/pull/43691
*/

function site_editor_tutorial_scripts_and_styles() {
	wp_enqueue_script(
		'site-editor-tutorial',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-edit-post', ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	$editor_style_url = plugins_url('build/style-index.css', __FILE__);
	wp_enqueue_style(
		'site-editor-tutorial-style',
		$editor_style_url,
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
	); 
}

add_action( 'enqueue_block_editor_assets', 'site_editor_tutorial_scripts_and_styles' );
