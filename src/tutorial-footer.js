/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import PageControl from './page-control';

export default function SiteEditorTutorialFooter( props ) {
	const {
		currentPage,
		setCurrentPage,
		pages,
		canGoBack,
		canGoForward,
		goBack,
		goForward,
		onFinish,
	} = props;

	return (
		<div className="site-editor-tutorial__footer">
			{ pages.length > 1 && (
				<PageControl
					currentPage={ currentPage }
					numberOfPages={ pages.length }
					setCurrentPage={ setCurrentPage } />
			) },
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
