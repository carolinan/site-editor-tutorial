/**
 * WordPress dependencies
 */
import { __dangerousOptInToUnstableAPIsOnlyForCoreModules } from '@wordpress/private-apis';

// Unlock for Gutenberg 18.3+ May 17 2024.
export const { unlock } =
	__dangerousOptInToUnstableAPIsOnlyForCoreModules(
		'I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.',
		'@wordpress/edit-site'
);
