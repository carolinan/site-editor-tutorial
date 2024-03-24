/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { store as commandsStore } from '@wordpress/commands';
import { Button } from '@wordpress/components';

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

export const getQueryParamValue = ( url, param ) => {
	const urlParams = new URLSearchParams( new URL( url ).search );
	return urlParams.get( param );
}

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
