/**
 * WordPress dependencies
 */
import { useState, useRef, useEffect } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { useEntityRecords } from '@wordpress/core-data';

// Note: Unlocking private API's require using the current version of Gutenberg!
// See src/unlock.js for more information.
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { unlock } from './unlock';
const { useLocation, useHistory } = unlock( routerPrivateApis );

/**
 * Internal dependencies
 */
import './style.scss';
import * as Pages from './tutorials';
import { TutorialModal } from './tutorial-modal';
import { getPosition } from './utils';
import { Hint } from './hint';
import { SelectPages } from './page-selector';

function SiteEditorTutorial() {
	const ref = useRef( null );
	const location = useLocation();
	const history = useHistory();
	const [ isOpen, setIsOpen ] = useState( true );
	const [ currentPage, setCurrentPage ] = useState( 0 );
	const [ activeAnchor, setActiveAnchor ] = useState(
		'.edit-site-layout__content'
	);
	const [ modalPosition, setModalPosition ] = useState( {
		top: 20,
		left: 400,
	} );
	const [ buttons, setButtons ] = useState( [] );
	const [ processedAnchors, setProcessedAnchors ] = useState( [] );
	const [ currentHref, setCurrentHref ] = useState( window.location.href );
	const { records, isResolving } = useEntityRecords(
		'postType',
		'wp_navigation'
	);
	const { tutorials, screen } =
		SelectPages( Pages, records, isResolving ) || {};

	const page = tutorials ? tutorials[ currentPage ] : null;

	const localStorageState = () => {
		try {
			const savedState = localStorage.getItem(
				'site-editor-tutorial-shown'
			);
			if ( savedState ) {
				return JSON.parse( savedState );
			}
		} catch ( error ) {
			console.error( 'Error reading from localStorage', error );
			return {};
		}
	};

	/* Use local storage to keep track of which tutorial pages have been shown. */
	const [ shownPages, setShownPages ] = useState( localStorageState );

	/**
	 * Close the modal when the user uses the close button, or clicks outside the modal.
	 * Register that the modal has been shown, so that it doesn't show again,
	 * and remove the button that activates the modal.
	 */
	const onFinish = () => {
		// Remove the border CSS class from the active anchor element
		if ( activeAnchor ) {
			const anchorElement =
				typeof activeAnchor === 'string'
					? document.querySelector( activeAnchor )
					: activeAnchor;

			if ( anchorElement ) {
				anchorElement.classList.remove(
					'site-editor-tutorial__hint_border'
				);
			}
		}

		// Wihout these two resets, the modal does not close.
		setIsOpen( false );
		setActiveAnchor( null );

		// Register that the modal has been shown, so that it doesn't show again.
		const newShownPages = { ...shownPages, [ currentPage ]: true };
		try {
			localStorage.setItem(
				'site-editor-tutorial-shown',
				JSON.stringify( newShownPages )
			);
		} catch ( error ) {
			console.error( 'Error writing to localStorage', error );
		}
		setShownPages( newShownPages );

		const buttonId = `site-editor-tutorial-button-${ currentPage }`;
		const button = document.getElementById( buttonId );
		if ( button ) {
			document.getElementById( buttonId ).style.display = 'none';
		}
	};

	// When the user clicks on a button, open the modal.
	const onButtonClick = ( event, anchor, index, top, left ) => {
		event.stopPropagation();
		setActiveAnchor( anchor );
		setCurrentPage( index );
		setIsOpen( true );
		setModalPosition( { top, left } );
	};

	// Move focus to the anchor when the modal is closed.
	useEffect( () => {
		const focusAnchor = () => {
			// If the anchor is for the first modal page, do not move focus.
			if (
				activeAnchor !== null &&
				activeAnchor !== '.edit-site-layout__content'
			) {
				activeAnchor.focus();
			}
		};

		if ( ! isOpen ) {
			focusAnchor();
		}

		return () => {
			focusAnchor();
		};
	}, [ isOpen, activeAnchor ] );

	const generateButtons = () => {
		const tutorialList = Pages[ screen ];
		if ( ! tutorialList || ! page ) {
			console.error( `No tutorial list found for ${ screen }` );
			return;
		}
		const newButtons = tutorialList.reduce( ( acc, page, index ) => {
			// Skip tutorial pages that have been shown.
			// This is temporarily disabled during development,
			// so that the buttons can be tested witohut having to reset the local storage.
			//if ( shownPages[index] ) {
			//	return acc;
			//}
			setTimeout( () => {
				let anchor = page.anchor;
				// If the anchor is an ID, use getElementById./
				if ( page.anchor.startsWith( '#' ) ) {
					anchor = document.getElementById(
						page.anchor.substring( 1 )
					);
				} else {
					anchor = document.querySelector( page.anchor );
					if ( page.nth !== undefined ) {
						const nth = page.nth;
						const nthAnchor = document.querySelectorAll(
							page.anchor
						)[ nth ];
						if ( nthAnchor ) {
							anchor = nthAnchor;
						}
					}
				}

				if ( ! anchor ) {
					// If there is a list of tutorial pages, but the anchor is not found, return early.
					console.error( `No anchor found for ${ page.anchor }` );
					return;
				}

				// Add the border CSS class to the anchor element
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
		setButtons( newButtons );
	};

	// Generate the first set of buttons.
	useEffect( () => {
		if ( buttons.length === 0 ) {
			generateButtons();
		}
	}, [] );

	// If the href changes, generate new buttons for the correct page.
	useEffect( () => {
		const checkHrefChangeOnClick = ( event ) => {
			const isClassFoundInParents = ( target, className ) => {
				while ( target && target !== document ) {
					if ( target.classList.contains( className ) ) {
						return true;
					}
					target = target.parentNode;
				}
				return false;
			};

			// Check if the clicked element is inside the tutorial modal.
			if (
				isClassFoundInParents( event.target, 'site-editor-tutorial' )
			) {
				return;
			}

			setTimeout( () => {
				const newHref = window.location.href;
				if ( newHref !== currentHref ) {
					setCurrentHref( newHref );
					onFinish();
					generateButtons();
				}
			}, 0 );
		};

		document.addEventListener( 'click', checkHrefChangeOnClick );

		return () =>
			document.removeEventListener( 'click', checkHrefChangeOnClick );
	}, [ currentHref, location ] );

	// If the iframe is clicked, generate new buttons for the correct page.
	useEffect( () => {
		const handleBlur = () => {
			setTimeout( () => {
				// Use setTimeout to push to the end of the event queue
				const iframe = document.querySelector(
					'iframe.edit-site-visual-editor__editor-canvas'
				);
				if ( document.activeElement === iframe ) {
					const newHref =
						location.pathname + location.search + '?canvas=edit';

					setTimeout( () => {
						if ( newHref !== currentHref ) {
							setCurrentHref( newHref );
							onFinish();
							generateButtons();
							history.push( newHref );
						}
					}, 0 );
				}
			}, 0 );
		};

		window.addEventListener( 'blur', handleBlur );

		return () => window.removeEventListener( 'blur', handleBlur );
	}, [ currentHref, history, location.pathname, location.search ] );

	// Return early if the tutorial page is not found.
	if ( ! page ) {
		return;
	}

	return (
		<>
			{ buttons.map( ( buttonProps ) => {
				return <Hint key={ buttonProps.id } { ...buttonProps } />;
			} ) }
			{ activeAnchor && (
				<TutorialModal
					page={ page }
					onFinish={ onFinish }
					modalPosition={ modalPosition }
					ref={ ref }
				/>
			) }
		</>
	);
}

registerPlugin( 'site-editor-tutorial-plugin', {
	render: SiteEditorTutorial,
	icon: null,
} );
