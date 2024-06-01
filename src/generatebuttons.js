/**
 * Internal dependencies
 */
import { getPosition } from './utils';

/**
 * Generate tutorial buttons.
 *
 * @param {Array}    Pages               - The list of tutorial pages.
 * @param {string}   screen              - The current screen.
 * @param {Function} setProcessedAnchors - Function to set processed anchors.
 * @param {Function} onButtonClick       - Function to handle button click events.
 * @return {Array} - The generated buttons.
 */
export function generateButtons(
	Pages,
	screen,
	setProcessedAnchors,
	onButtonClick
) {
	const tutorialList = Pages[ screen ];

	return tutorialList.reduce( ( acc, page, index ) => {
		setTimeout( () => {
			let anchor = page.anchor;
			if ( page.anchor.startsWith( '#' ) ) {
				anchor = document.getElementById( page.anchor.substring( 1 ) );
			} else {
				anchor = document.querySelector( page.anchor );
				if ( page.nth !== undefined ) {
					const nthAnchor = document.querySelectorAll( page.anchor )[
						page.nth
					];
					if ( nthAnchor ) {
						anchor = nthAnchor;
					}
				}
			}

			if ( page.hintType === 'border' ) {
				anchor.classList.add( 'site-editor-tutorial__hint_border' );
			}

			const {
				offsetX,
				offsetY,
				hintOffsetX,
				hintOffsetY,
				label,
				hintSize,
			} = page;
			const { top, left } = getPosition(
				anchor,
				offsetX,
				offsetY,
				page.verticalplacement,
				page.horizontalplacement
			);
			const { top: hintTop, left: hintLeft } = getPosition(
				anchor,
				hintOffsetX,
				hintOffsetY,
				page.verticalplacement,
				page.horizontalplacement
			);
			const buttonId = `site-editor-tutorial-button-${ index }`;

			setProcessedAnchors( ( prevProcessedAnchors ) => [
				...prevProcessedAnchors,
				anchor,
			] );

			const buttonProps = {
				id: buttonId,
				top: hintTop,
				left: hintLeft,
				size: hintSize,
				label,
				index,
				onClick( event ) {
					onButtonClick( event, anchor, index, top, left );
				},
			};
			acc.push( {
				id: `site-editor-tutorial-button-${ index }`,
				...buttonProps,
			} );
		}, 1000 );
		return acc;
	}, [] );
}
