
/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';

export function Hint({ id, top, left, size, label, onClick }) {
	const style = {
		position: 'absolute',
		top: top,
		left: left,
		width: `${size}px`,
		height: `${size}px`,
		cursor: 'pointer',
	};
	// The button is not focusable
	return (
		<Button
			id={ id }
			className="site-editor-tutorial__hint"
			style={ style }
			label={ label }
			onClick={ onClick }
			tabIndex={ -1 }
		/>
	);
}
