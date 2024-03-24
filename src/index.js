/**
 * WordPress dependencies
 */
import { useState, useRef, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { useEntityRecords } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import './style.scss';
import * as Pages from './pages';
import { TutorialModal } from './tutorial-modal';
import { getPosition, getQueryParamValue } from './utils';
import { Hint } from './hint';
import { selectPages } from './page-selector';

function SiteEditorTutorial() {
	const ref = useRef( null );
	const [ isOpen, setIsOpen ] = useState( true );
	const [ currentPage, setCurrentPage ] = useState( 0 );
	const [ activeAnchor, setActiveAnchor ] = useState( '.edit-site-layout__content' );
	const [ modalPosition, setModalPosition ] = useState({ top: 20, left: 20 });
	const [ buttons, setButtons ] = useState([]);
	const [ processedAnchors, setProcessedAnchors ] = useState([]);

	const [ currentHref, setCurrentHref ] = useState(window.location.href);
	const postIDParam = getQueryParamValue( window.location.href, 'postId' );
	const { records, isResolving } = useEntityRecords( 'postType', 'wp_navigation' );
	
	const localStorageState = () => {
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
	
	/* Use local storage to keep track of which tutorial pages have been shown. */
	const [ shownPages, setShownPages ] = useState( localStorageState );

	const pageSelector = getPageSelectorFromUrl();
	function getPageSelectorFromUrl() {
		const postTypeParam = getQueryParamValue( window.location.href, 'postType' ) || '';
		const canvasParam = getQueryParamValue( window.location.href, 'canvas' ) || '';
		const pathParam = getQueryParamValue( window.location.href, 'path' ) || '';
		const params = pathParam + postTypeParam + canvasParam;
		if ( params ) {
			return params
		} else {
			return 'entryPages';
		}
	}

	/**
	 * Close the modal when the user uses the close button, or clicks outside the modal.
	 * Register that the modal has been shown, so that it doesn't show again,
	 * and remove the button that activates the modal.
	 */
	const onFinish = () => {
		// Wihout these two resets, the modal does not close.
		setIsOpen( false );
		setActiveAnchor( null );

		// Register that the modal has been shown, so that it doesn't show again.
		const newShownPages = { ...shownPages, [currentPage]: true };
		try {
			localStorage.setItem( 'site-editor-tutorial-shown', JSON.stringify( newShownPages ) );
		} catch (error) {
			// console.error( "Error writing to localStorage", error );
		}
		setShownPages( newShownPages );

		const buttonId = `site-editor-tutorial-button-${currentPage}`;
		const button = document.getElementById( buttonId );
		if ( button ) {
		//	button.remove();
			//document.getElementById(buttonId).style.display = 'none';
		}
	};

	// When the user clicks on a button, open the modal.
	const onButtonClick = ( event, anchor, index, top, left) => {
		event.stopPropagation();
		setActiveAnchor( anchor );
		setCurrentPage( index );
		setIsOpen( true );
		setModalPosition( { top, left } );
	}

	// Move focus to the anchor when the modal is closed.
	useEffect( () => {
		const focusAnchor = () => {
			// If the anchor is for the first modal page, do not move focus.
			if ( activeAnchor !== null && activeAnchor !== '.edit-site-layout__content' ) {
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

	const generateButtons = ( customUrl ) => {
		// The customUrl is needed to fake the url when the editor canvas iframe is clicked.
		const urlToUse = customUrl || window.location.href;
		const postTypeParam = getQueryParamValue( urlToUse, 'postType' ) || '';
		const canvasParam = getQueryParamValue( urlToUse, 'canvas' ) || '';
		const pathParam = getQueryParamValue( urlToUse, 'path' ) || '';
		const postIDParam = getQueryParamValue( urlToUse, 'postId' ) || '';

		let params = pathParam + postTypeParam + canvasParam;
		if ( ! params ) {
			params = 'entryPages';
		}

		if ( ! selectPages(Pages, params, postIDParam) || selectPages(Pages, params, postIDParam).length === 0 ) {
			//console.error(`No pages found for ${params}`);
			setButtons([]);
			return;
		}

		const newButtons = selectPages( Pages, params, postIDParam ).reduce( (acc, page, index) => {
			if ( shownPages && shownPages[index] ) {
				// If the page has been shown, skip adding a button for it.
				return acc;
			}
	
			setTimeout(() => {
				let anchor = page.anchor;
				// If the anchor is an ID, use getElementById./
				if ( page.anchor.startsWith('#') ) {
					anchor = document.getElementById( page.anchor.substring(1) );
				} else {
					anchor = document.querySelector( page.anchor );
					if ( page.nth !== undefined ) {
						const nth = page.nth;
						const nthAnchor = document.querySelectorAll( page.anchor )[nth];
						if ( nthAnchor ) {
							anchor = nthAnchor;
						}
					}
				}

				if ( ! anchor ) {
					// console.error( `No anchor found for ${page.anchor}` );
					return;
				}
		
				const { offsetX, offsetY, hintOffsetX, hintOffsetY, label, hintSize } = page;
				const { top, left } = getPosition( anchor, offsetX, offsetY, page.verticalplacement, page.horizontalplacement );
				const { top: hintTop, left: hintLeft } = getPosition( anchor, hintOffsetX, hintOffsetY, page.verticalplacement, page.horizontalplacement );
				const buttonId = `site-editor-tutorial-button-${index}`;

				setProcessedAnchors( prevProcessedAnchors => [ ...prevProcessedAnchors, anchor ] );

				const buttonProps = {
					id: buttonId,
					top: hintTop,
					left: hintLeft,
					size: hintSize,
					label,
					index,
					onClick( event ) {
						onButtonClick( event, anchor, index, top, left);
					}
				};
				acc.push( {
					id: `site-editor-tutorial-button-${index}`,
					...buttonProps,
				});
			}, 1000 );
			return acc;
		}, []);
		setButtons( newButtons );
	};

	// Generate the first set of buttons.
	useEffect(() => {
		if ( buttons.length === 0 ) {
			generateButtons();
		}
	}, []);

	// If the href changes, generate new buttons for the correct page.
	useEffect(() => {
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
			if ( isClassFoundInParents( event.target, 'site-editor-tutorial' ) ) {
				return;
			}

			setTimeout(() => {
				const newHref = window.location.href;
				if ( newHref !== currentHref ) {
					setCurrentHref( newHref );
					onFinish();
					generateButtons();
				}
			}, 0);
		};

		document.addEventListener( 'click', checkHrefChangeOnClick );

		return () => document.removeEventListener( 'click', checkHrefChangeOnClick );
	}, [ currentHref ]);

	// If the iframe, the editor canvas, is focused or clicked on, 
	// generate new buttons for the correct page.
	window.addEventListener('blur', () => {
		setTimeout(() => { // Use setTimeout to push to the end of the event queue
			const iframe = document.querySelector( 'iframe.edit-site-visual-editor__editor-canvas' );
			if ( document.activeElement === iframe ) {
				const newHref = window.location.href + '?canvas=edit';

				setTimeout(() => {
					if ( newHref !== currentHref ) {
						setCurrentHref( newHref );
						onFinish();
						generateButtons( newHref);
						//console.log( 'ny href: ', currentHref );
					}
				}, 0);
			}
		}, 0);
	});

	const page = selectPages( Pages, pageSelector, postIDParam, records, isResolving ) ? 
		selectPages( Pages, pageSelector, postIDParam, records, isResolving ) [currentPage] : null;

	return (
		<>
			{ buttons.map( ( buttonProps ) => {
				// Don't render the button if the modal has already been shown.
				if ( shownPages && shownPages[buttonProps.index] ) {
					return null;
				}
				return <Hint key={buttonProps.id} {...buttonProps} />;
			} ) }
			{ activeAnchor && page &&
			<TutorialModal
				page={ page }
				onFinish={ onFinish }
				modalPosition={ modalPosition }
				ref={ ref }
			/>
			}
		</>
	);
}

registerPlugin( 'site-editor-tutorial-plugin', {
	render: SiteEditorTutorial,
	icon: null,
} );
