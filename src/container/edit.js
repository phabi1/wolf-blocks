/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import { Panel, PanelBody, SelectControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Top Style", "wolf")}>
					<SelectControl
						label={__("Select Top Style", "wolf")}
						value={attributes.topStyle}
						options={[
							{ label: "None", value: "none" },
							{ label: "White Wave 1", value: "white-wave-1" },
							{ label: "White Wave 2", value: "white-wave-2" },
						]}
						onChange={(newTopStyle) => setAttributes({ topStyle: newTopStyle })}
					/>
				</PanelBody>
				<PanelBody title={__("Content Style", "wolf")}>
					<SelectControl
						label={__("Select Content Background Color", "wolf")}
						value={attributes.contentBgColor}
						options={[
							{ label: "Default", value: "default" },
							{ label: "Gray", value: "gray-background" },
							{ label: "Red", value: "red-background" },
						]}
						onChange={(newContentBgColor) =>
							setAttributes({ contentBgColor: newContentBgColor })
						}
					/>
					<SelectControl
						label={__("Select Content Text Color", "wolf")}
						value={attributes.contentTextColor}
						options={[
							{ label: "Default", value: "default" },
							{ label: "White", value: "white-text" },
							{ label: "Black", value: "black-text" },
						]}
						onChange={(newContentTextColor) =>
							setAttributes({ contentTextColor: newContentTextColor })
						}
					/>
					<SelectControl
						label={__("Select Content Style", "wolf")}
						value={attributes.contentStyle}
						options={[
							{ label: "None", value: "none" },
							{ label: "Background 1", value: "background-1" },
						]}
						onChange={(newContentStyle) =>
							setAttributes({ contentStyle: newContentStyle })
						}
					/>
				</PanelBody>
				<PanelBody title={__("Bottom Style", "wolf")}>
					<SelectControl
						label={__("Select Bottom Style", "wolf")}
						value={attributes.bottomStyle}
						options={[
							{ label: "None", value: "none" },
							{ label: "White Wave 1", value: "white-wave-1" },
							{ label: "White Wave 2", value: "white-wave-2" },
							{ label: "Black Wave 1", value: "black-wave-1" },
						]}
						onChange={(newBottomStyle) =>
							setAttributes({ bottomStyle: newBottomStyle })
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div
					className={`wolf-blocks-container-top ${attributes.topStyle}`}
				></div>
				<div className="wolf-blocks-container-content">
					<InnerBlocks />
				</div>
				<div
					className={`wolf-blocks-container-bottom ${attributes.bottomStyle}`}
				></div>
			</div>
		</>
	);
}
