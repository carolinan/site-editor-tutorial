/**
 * This file adds a component for opening the command palette from the Site Editor welcome guide.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { store as commandsStore } from '@wordpress/commands';
import { Button } from '@wordpress/components';

export const CommandPaletteButton = () => {
	const { open: openCommandCenter } = useDispatch( commandsStore );

	return (
		<Button
			className="is-primary edit-site-welcome-guide__text"
			onClick={ () => openCommandCenter() }
		>
			{ __( 'Command Palette' ) }
		</Button>
	);
};
