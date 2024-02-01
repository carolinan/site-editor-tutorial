/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useState, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { registerPlugin } from '@wordpress/plugins';
import { useEntityRecords } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import './style.scss';
import SiteEditorTutorialFooter from './tutorial-footer';
import * as Pages from './pages';

function SiteEditorTutorial() {
	const ref = useRef( null );
	const [ isOpen, setIsOpen ] = useState( true );
	const [ currentPage, setCurrentPage ] = useState( 0 );
	// Set opacity to 0 to prevent layout shifts:
	const [ styleAttr, setStyleAttributes ] = useState( { opacity: '0' } );

	/*
	 * This would have been easier if I could have just used useLocation() but its private.
	 * Locate the tutorial pages based on the URL.
	 */
	let pages = Pages.entryPages;
	const href = window.location.href;
	const path = window.location.pathname;

	function getQueryParamValue( url, param ) {
		const urlParams = new URLSearchParams( new URL( url ).search );
		return urlParams.get( param );
	}
	/**
	 * The path determines which Site Editor screen is shown.
	 * Example: wp-admin/site-editor.php?path=%2Fpage
	*/
	const pathParam = getQueryParamValue(href, 'path') || '';
	/**
	 * The post type parameter is used to determine which post type that is being viewed,
	 * for example post, page, pattern.
	 */
	const postTypeParam = getQueryParamValue( href, 'postType'  ) || '';
	/**
	 * If the canvas parameter is set, we are in the actual editor and not
	 * in the preview mode where the navigation menu is shown.
	*/
	const canvasParam = getQueryParamValue( href, 'canvas' ) || '';

	const postIDParam = getQueryParamValue( href, 'postId' ) || '';

	// Combine the parameters
	const pageSelector = pathParam + postTypeParam + canvasParam;

	console.log( 'href: ', href );
	console.log( 'path: ', path );
	console.log( 'pathParam: ', pathParam );
	console.log( 'postTypeParam: ', postTypeParam );
	console.log( 'canvasParam: ', canvasParam );
	console.log( 'postIDParam: ', postIDParam );
	console.log( 'pageSelector: ', pageSelector );

	switch ( pageSelector ) {
		case '/navigation':
		case 'wp_navigation':
			if ( postIDParam ) {
				// If the post id is set, we are in the editor for a specific menu.
				console.log( 'postIDParam: ', postIDParam );
				pages = Pages.navigationDetailsPages;
			} else {
				const { records, isResolving } = useEntityRecords( 'postType', 'wp_navigation' );
				let count = 0;

				if ( isResolving ) {
					pages = Pages.navigationPages;
				} else if ( records ) {
					count = records.length;
					// If there is more than one menu, show the list of menus
					if ( count > 1 ) {
						pages = Pages.navigationPages;
					} else {
						// If there is only one menu, show the details of the menu.
						pages = Pages.navigationDetailsPages;
					}
				}
			}
			break;
		case '/wp_global_styles':
			/**
			 * Note: /wp_global_stylesedit is an exception because it does not open with
			 * the select styles, just the editor.
			 * 
			 * /wp_global_styles is the page with the left hand menu where you preview style variations.
			 */
			pages = Pages.stylesPages;
			break;
		case '/page':
			// /page is the page previews and the site editor menu with the list of pages.
			// /pageedit is the editor page for a page.
			pages = Pages.pagesPages;
			break;
		case '/wp_template':
			// /wp_templateedit is the editor page for a template.
			// /wp_template is the preview page for a template.
			pages = Pages.templatesPages;
			break;
		case '/patterns':
			pages = Pages.patternsPages;
			break;
		case 'edit':
			pages = Pages.editorCanvasPages;
			break;
		default:
			console.log( 'default' );
			pages = Pages.entryPages;
			break;
	}

	useEffect( () => {
		// Place focus at the top of the modal on mount and when the page changes.
		// This focus management needs to be separate from the "focusOnMOunt" modal property
		// because of the pagination.
		const frame = ref.current?.querySelector( '.site-editor-tutorial' );
		if ( frame instanceof HTMLElement ) {
			frame.focus();
		}
	}, [ currentPage ] );

	const canGoBack = currentPage > 0;
	const canGoForward = currentPage < pages.length - 1;
	const goBack = () => {
		if ( canGoBack ) {
			resetStyles();
			setCurrentPage( currentPage - 1 );
		}
	};
	const goForward = () => {
		if ( canGoForward ) {
			resetStyles();
			setCurrentPage( currentPage + 1 );
		}
	};

	function applyStyles( anchor, highlightType ) {
		const borderColor = 'var(--wp-block-synced-color)';
		if ( highlightType === 'border' ) {
			anchor.style.border = `6px solid ${ borderColor }`;
		} else if ( highlightType === 'boxShadow' ) {
			anchor.style.boxShadow = `inset 0 0 0 6px ${ borderColor }`;
		}
	}

	const resetStyles = () => {
		let anchor = document.querySelector( pages[ currentPage ].anchor );
		const nth = pages[ currentPage ].nth;
		if ( anchor ) {
			if ( nth >= 0 ) {
				anchor = document.querySelectorAll( pages[ currentPage ].anchor );
				const nthElement = anchor[ nth ];
				if ( nthElement ) {
					nthElement.style.border = '';
					nthElement.style.boxShadow = '';
				}
			} else {
				anchor.style.border = '';
				anchor.style.boxShadow = '';
			}
		}
	};

	const removeOverlay = () => {
		const overlay = document.querySelector( '.components-modal__screen-overlay:has(.site-editor-tutorial)' );
		if ( overlay ) {
			overlay.style.position = 'initial';
		}
	};

	useEffect( () => {
		const getAnchorElement = () => {
			const anchor = document.querySelector( pages[ currentPage ].anchor );
			// Some of the elements are node lists, so we need to use querySelectorAll.
			const nth = pages[ currentPage ].nth;
			return nth >= 0 ? document.querySelectorAll( pages[ currentPage ].anchor )[ nth ] : anchor;
		};

		const getPosition = ( anchor, offsetX, offsetY ) => {
			const rect = anchor.getBoundingClientRect();
			const top =
				pages[ currentPage ].verticalplacement === 'bottom'
					? `${ rect.bottom + window.scrollY + offsetY }px`
					: `${ rect.top + window.scrollY + offsetY }px`;
			const left =
				pages[ currentPage ].horizontalplacement === 'right'
					? `${ rect.right + window.scrollX + offsetX }px`
					: `${ rect.left + window.scrollX + offsetX }px`;
			return { top, left };
		};

		const createStyleAttributes = () => {
			const anchor = getAnchorElement();
			// Position the modal based on the anchor element.
			if ( anchor ) {
				const { offsetX, offsetY } = pages[ currentPage ];
				const { top, left } = getPosition( anchor, offsetX, offsetY );

				const newStyle = {
					position: 'absolute',
					opacity: '1', // Set opacity back to 1.
					top,
					left,
				};

				// Add border or box shadow styles to highlight the targeted element.
				if ( pages[ currentPage ].highlightborder || pages[ currentPage ].highlight ) {
					const styleProperty = pages[ currentPage ].highlightborder ? 'border' : 'boxShadow';
					applyStyles( anchor, styleProperty );
				}

				setStyleAttributes( newStyle );

				/*
				if ( pages[ currentPage ]?.name == 'navigationPages' ) {
					removeOverlay();
				}
				*/
			} else {
				// If the anchor is not found, try waiting a little longer...
				setTimeout( createStyleAttributes, 100 );
			}
		};
		createStyleAttributes();
	}, [ currentPage, pages ] );

	const onFinish = () => {
		setIsOpen( false );
		resetStyles();
	};

	if ( pages.length === 0 || ! isOpen || path !== '/wp-admin/site-editor.php' ) {
		return null;
	}

	return (
		<Modal
			className={ classnames(
				'site-editor-tutorial',
				'site-editor-tutorial-page-' + ( currentPage + 1 ),
				{
					'site-editor-tutorial-arrow': pages[ currentPage ].showArrow,
					[ `site-editor-tutorial-arrow-${ pages[ currentPage ].arrowPosition }` ]:
						pages[ currentPage ].showArrow,
				}
			) }
			shouldCloseOnEsc={ true }
			shouldCloseOnClickOutside={ false }
			style={ styleAttr }
			contentLabel={ __( 'Site Editor Tutorial' ) }
			isDismissible={ pages.length > 1 }
			onRequestClose={ onFinish }
			onKeyDown={ ( event ) => {
				if ( event.code === 'ArrowLeft' ) {
					goBack();
					// Do not scroll the modal's contents.
					event.preventDefault();
				} else if ( event.code === 'ArrowRight' ) {
					goForward();
					// Do not scroll the modal's contents.
					event.preventDefault();
				}
			} }
			ref={ ref }
		>
			<div className="site-editor-tutorial__container">
				<div className="site-editor-tutorial__page">
					{ pages[ currentPage ].image }
					{ pages[ currentPage ].content }
				</div>
				<SiteEditorTutorialFooter
					pages={ pages }
					currentPage={ currentPage }
					setCurrentPage={ setCurrentPage }
					canGoBack={ canGoBack }
					canGoForward={ canGoForward }
					goBack={ goBack }
					goForward={ goForward }
					onFinish={ onFinish }
					resetStyles={ resetStyles }
				/>
			</div>
		</Modal>
	);
}

registerPlugin( 'site-editor-tutorial-plugin', {
	render: SiteEditorTutorial,
	icon: null,
} );
