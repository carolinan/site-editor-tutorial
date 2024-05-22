
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * The tutorial modal component, which displays the tutorial content.
 * See https://developer.wordpress.org/block-editor/reference-guides/components/modal/
 */
export const TutorialModal = ( { modalPosition, page, onFinish, ref } ) => (
	<Modal
		className={ classnames(
		'site-editor-tutorial',
		{
			'site-editor-tutorial-arrow': page.showArrow,
			[`site-editor-tutorial-arrow-${page.arrowPosition}`]: page.showArrow,
		}
		) }
		shouldCloseOnEsc={ true }
		shouldCloseOnClickOutside={ true }
		style={ {
			position: 'absolute', 
			top: modalPosition.top,
			left: modalPosition.left,
			opacity: 1,
			display: 'block',
		} }
		contentLabel={ __( 'Site Editor Tutorial' ) }
		isDismissible={ true }
		onRequestClose={ onFinish }
		ref={ ref }
	>
	<div className="site-editor-tutorial__container">
		<div className="site-editor-tutorial__page">
			{ page.image }
			{ page.content }
		</div>
	</div>
	</Modal>
);
