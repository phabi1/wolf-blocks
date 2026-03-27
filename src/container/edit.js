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
import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";

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
        <PanelBody title={__("Top Style", "wolf-blocks")}>
          <SelectControl
            label={__("Select Top Style", "wolf-blocks")}
            value={attributes.topStyle}
            options={[
              { label: "None", value: "none" },
              { label: "White Wave 1", value: "white-wave-1" },
              { label: "White Wave 2", value: "white-wave-2" },
            ]}
            onChange={(newTopStyle) => setAttributes({ topStyle: newTopStyle })}
          />
          <ToggleControl
            label={__("Should the top style float?", "wolf-blocks")}
            checked={attributes.topFloating}
            onChange={(newTopFloating) =>
              setAttributes({ topFloating: newTopFloating })
            }
          />
        </PanelBody>
        <PanelBody title={__("Bottom Style", "wolf-blocks")}>
          <SelectControl
            label={__("Select Bottom Style", "wolf-blocks")}
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
          <ToggleControl
            label={__("Should the bottom style float?", "wolf-blocks")}
            checked={attributes.bottomFloating}
            onChange={(newBottomFloating) =>
              setAttributes({ bottomFloating: newBottomFloating })
            }
          />
        </PanelBody>
      </InspectorControls>
      <div {...useBlockProps()}>
        <div
          className={`wolf-blocks-container-top ${attributes.topStyle} ${
            attributes.topFloating ? "floating" : ""
          }`}
        ></div>
        <div className={"wolf-blocks-container-content"}>
          <InnerBlocks />
        </div>
        <div
          className={`wolf-blocks-container-bottom ${attributes.bottomStyle} ${
            attributes.bottomFloating ? "floating" : ""
          }`}
        ></div>
      </div>
    </>
  );
}
