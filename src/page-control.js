/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { PageControlIcon } from './icons';

export default function PageControl( props ) {
	const { currentPage, numberOfPages, setCurrentPage, resetStyles } = props;

	return (
		<ul
			className="site-editor-tutorial__page-control"
			aria-label={ __( 'Tutorial controls' ) }
		>
			{ Array.from( { length: numberOfPages } ).map( ( _, page ) => (
				<li
					key={ page }
					// Set aria-current="step" on the active page, see https://www.w3.org/TR/wai-aria-1.1/#aria-current
					aria-current={ page === currentPage ? 'step' : undefined }
				>
					<Button
						key={ page }
						icon={ <PageControlIcon /> }
						aria-label={ sprintf(
							/* translators: 1: current page number 2: total number of pages */
							__( 'Page %1$d of %2$d' ),
							page + 1,
							numberOfPages
						) }
						onClick={ () => {
							setCurrentPage(page);
							resetStyles();
						}}
					/>
				</li>
			) ) }
		</ul>
	);
}
