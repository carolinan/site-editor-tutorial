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
	const {
		pages,
		currentPage,
		numberOfPages,
		setCurrentPage,
		getPosition,
		setModalPosition,
		checkforAnchor,
	} = props;

	const onClick = ( page ) => {
		if ( ! pages[ page ].anchor ) {
			setCurrentPage( page );
		} else {
			const anchor = checkforAnchor( page );
			if ( ! anchor ) {
				// TO DO: this tutorial page should be skipped,
				// It should not be part of the array below!
				setCurrentPage( page );
				return;
			}
			const { top, left } = getPosition(
				anchor,
				pages[ page ].offsetX,
				pages[ page ].offsetY,
				pages[ page ].verticalplacement,
				pages[ page ].horizontalplacement
			);
			setModalPosition( { top, left } );
			setCurrentPage( page );
		}
	};

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
						onClick={ () => onClick( page ) }
					/>
				</li>
			) ) }
		</ul>
	);
}
