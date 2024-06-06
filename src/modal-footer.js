/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import PageControl from './page-control';
import { getPosition } from './utils';

export default function SiteEditorTutorialFooter( props ) {
	const { currentPage, setCurrentPage, pages, onFinish, setModalPosition } =
		props;

	const canGoBack = currentPage > 0;
	const canGoForward = currentPage < pages.length - 1;

	const checkforAnchor = ( newPage ) => {
		let anchor = pages[ newPage ].anchor;
		if ( pages[ newPage ].anchor.startsWith( '#' ) ) {
			anchor = document.getElementById(
				pages[ newPage ].anchor.substring( 1 )
			);
		} else {
			anchor = document.querySelector( pages[ newPage ].anchor );
			if ( pages[ newPage ].nth !== undefined ) {
				const nthAnchor = document.querySelectorAll(
					pages[ newPage ].anchor
				)[ pages[ newPage ].nth ];
				if ( nthAnchor ) {
					anchor = nthAnchor;
				}
			}
		}
		return anchor;
	};

	const goBack = () => {
		if ( canGoBack ) {
			setCurrentPage( ( prevPage ) => {
				const newPage = prevPage - 1;
				if ( ! pages[ newPage ].anchor ) {
					return newPage;
				}
				const anchor = checkforAnchor( newPage );
				if ( ! anchor ) {
					return newPage;
				}
				const { top, left } = getPosition(
					anchor,
					pages[ newPage ].offsetX,
					pages[ newPage ].offsetY,
					pages[ newPage ].verticalplacement,
					pages[ newPage ].horizontalplacement
				);
				setModalPosition( { top, left } );

				return newPage;
			} );
		}
	};

	const goForward = () => {
		if ( canGoForward ) {
			setCurrentPage( ( prevPage ) => {
				const newPage = prevPage + 1;
				if ( ! pages[ newPage ].anchor ) {
					return newPage;
				}
				const anchor = checkforAnchor( newPage );
				if ( ! anchor ) {
					return newPage;
				}
				const { top, left } = getPosition(
					anchor,
					pages[ newPage ].offsetX,
					pages[ newPage ].offsetY,
					pages[ newPage ].verticalplacement,
					pages[ newPage ].horizontalplacement
				);
				setModalPosition( { top, left } );

				return newPage;
			} );
		}
	};

	return (
		<div className="site-editor-tutorial__footer">
			{ pages.length > 1 && (
				<PageControl
					pages={ pages }
					currentPage={ currentPage }
					numberOfPages={ pages.length }
					setCurrentPage={ setCurrentPage }
					checkforAnchor={ checkforAnchor }
					setModalPosition={ setModalPosition }
					getPosition={ getPosition }
				/>
			) }
			,
			{ canGoBack && (
				<Button
					className="site-editor-tutorial__back-button"
					variant="tertiary"
					onClick={ goBack }
				>
					{ __( 'Previous' ) }
				</Button>
			) }
			{ canGoForward && (
				<Button
					className="site-editor-tutorial__forward-button"
					variant="primary"
					onClick={ goForward }
				>
					{ __( 'Next' ) }
				</Button>
			) }
			{ ! canGoForward && (
				<Button
					className="site-editor-tutorial__finish-button"
					variant="primary"
					onClick={ onFinish }
				>
					{ __( 'Finish' ) }
				</Button>
			) }
		</div>
	);
}
