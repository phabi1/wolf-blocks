/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { className, ...saveBlockProps } = useBlockProps.save();
	const classNames =
		className +
		` bg-${attributes.contentBgColor} text-${attributes.contentTextColor} style-${attributes.contentStyle}`;

	return (
		<div
			{...saveBlockProps}
			className={classNames}
		>
			<div className={"wolf-blocks-container-top " + attributes.topStyle}></div>
			<div className="wolf-blocks-container-content">
				<InnerBlocks.Content />
			</div>
			<div
				className={"wolf-blocks-container-bottom " + attributes.bottomStyle}
			></div>
		</div>
	);
}
