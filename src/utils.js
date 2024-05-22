/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { store as commandsStore } from '@wordpress/commands';
import { Button } from '@wordpress/components';

// Get the position of the element,
// so that the button and modal can be positioned relative to it.
export const getPosition = ( anchor, offsetX, offsetY, verticalPlacement, horizontalPlacement ) => {
	const rect = anchor.getBoundingClientRect();
	const top =
		verticalPlacement === 'bottom'
			? `${rect.bottom + window.scrollY + offsetY}px`
			: `${rect.top + window.scrollY + offsetY}px`;
	const left =
		horizontalPlacement === 'right'
			? `${rect.right + window.scrollX + offsetX}px`
			: `${rect.left + window.scrollX + offsetX}px`;
	return { top, left };
};

export const localStorageState = () => {
	try {
		const savedState = localStorage.getItem( 'site-editor-tutorial-shown' );
		if ( savedState ) {
			return JSON.parse( savedState );
		}
	} catch ( error ) {
		console.error( "Error reading from localStorage", error );
		return {};
	}
};

// A button that opens the command palette, used in the "Entry" tutorial page.
// See https://developer.wordpress.org/block-editor/reference-guides/packages/packages-commands/
export const CommandPaletteButton = () => {
	const { open: openCommandCenter } = useDispatch( commandsStore );
	return (
		<Button
			className="is-primary"
			onClick={ () => openCommandCenter() }
		>
			{ __( 'Open Command Palette' ) }
		</Button>
	);
};
