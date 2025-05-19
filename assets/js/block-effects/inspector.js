import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, SelectControl, PanelBody, IconButton } from '@wordpress/components';

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        console.log('Props:',props);
        return (
            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls key="inspector">

                    <PanelBody title={__('Animations', 'block-effects')} initialOpen={false}>

                        <SelectControl
                            label={__('Animation', 'block-effects')}
                            value={props.attributes.animation}
                            options={[
                                { label: __('Default', 'block-effects'), value: '' },
                                { label: __('Fade', 'block-effects'), value: 'fade' },
                                { label: __('Fade up', 'block-effects'), value: 'fade-up' },
                                { label: __('Fade down', 'block-effects'), value: 'fade-down' },
                                { label: __('Fade left', 'block-effects'), value: 'fade-left' },
                                { label: __('Fade right', 'block-effects'), value: 'fade-right' },
                                { label: __('Fade up right', 'block-effects'), value: 'fade-up-right' },
                                { label: __('Fade up left', 'block-effects'), value: 'fade-up-left' },
                                { label: __('Fade down right', 'block-effects'), value: 'fade-down-right' },
                                { label: __('Fade down left', 'block-effects'), value: 'fade-down-left' },
                                { label: __('Flip Up', 'block-effects'), value: 'flip-up' },
                                { label: __('Flip Down', 'block-effects'), value: 'flip-down' },
                                { label: __('Flip Left', 'block-effects'), value: 'flip-left' },
                                { label: __('Flip Right', 'block-effects'), value: 'flip-right' },
                                { label: __('Slide up', 'block-effects'), value: 'slide-up' },
                                { label: __('Slide down', 'block-effects'), value: 'slide-down' },
                                { label: __('Slide left', 'block-effects'), value: 'slide-left' },
                                { label: __('Slide right', 'block-effects'), value: 'slide-right' },
                                { label: __('Zoom in', 'block-effects'), value: 'zoom-in' },
                                { label: __('Zoom in up', 'block-effects'), value: 'zoom-in-up' },
                                { label: __('Zoom in down', 'block-effects'), value: 'zoom-in-down' },
                                { label: __('Zoom in left', 'block-effects'), value: 'zoom-in-left' },
                                { label: __('Zoom in right', 'block-effects'), value: 'zoom-in-right' },
                                { label: __('Zoom out', 'block-effects'), value: 'zoom-out' },
                                { label: __('Zoom out up', 'block-effects'), value: 'zoom-out-up' },
                                { label: __('Zoom out down', 'block-effects'), value: 'zoom-out-down' },
                                { label: __('Zoom out left', 'block-effects'), value: 'zoom-out-left' },
                                { label: __('Zoom out right', 'block-effects'), value: 'zoom-out-right' },
                            ]}
                            onChange={animation => props.setAttributes({ animation })}
                        />

                        <SelectControl
                            label={__('Anchor', 'block-effects')}
                            value={props.attributes.animationAnchor}
                            options={[
                                { label: __('Default', 'block-effects'), value: '' },
                                { label: __('Top-Bottom', 'block-effects'), value: 'top-bottom' },
                                { label: __('Top-Center', 'block-effects'), value: 'top-center' },
                                { label: __('Top-Top', 'block-effects'), value: 'top-top' },
                                { label: __('Center-Bottom', 'block-effects'), value: 'center-bottom' },
                                { label: __('Center-Center', 'block-effects'), value: 'center-center' },
                                { label: __('Center-Top', 'block-effects'), value: 'center-top' },
                                { label: __('Bottom-Bottom', 'block-effects'), value: 'bottom-bottom' },
                                { label: __('Bottom-Center', 'block-effects'), value: 'bottom-center' },
                                { label: __('Bottom-Top', 'block-effects'), value: 'bottom-top' },
                            ]}
                            onChange={animationAnchor => props.setAttributes({ animationAnchor })}
                            // Improve help text to explain what is the first and second value
                            help={__('First value is element, second value is the viewport position', 'block-effects')}
                        />
                        <SelectControl
                            label={__('Easing', 'block-effects')}
                            value={props.attributes.animationAnchor}
                            options={[
                                { label: __('Default', 'block-effects'), value: '' },
                                { label: __('linear', 'block-effects'), value: 'linear' },
                                { label: __('ease', 'block-effects'), value: 'ease' },
                                { label: __('ease-in', 'block-effects'), value: 'ease-in' },
                                { label: __('ease-out', 'block-effects'), value: 'ease-out' },
                                { label: __('ease-in-out', 'block-effects'), value: 'ease-in-out' },
                                { label: __('ease-in-back', 'block-effects'), value: 'ease-in-back' },
                                { label: __('ease-out-back', 'block-effects'), value: 'ease-out-back' },
                                { label: __('ease-in-out-back', 'block-effects'), value: 'ease-in-out-back' },
                                { label: __('ease-in-sine', 'block-effects'), value: 'ease-in-sine' },
                                { label: __('ease-out-sine', 'block-effects'), value: 'ease-out-sine' },
                                { label: __('ease-in-out-sine', 'block-effects'), value: 'ease-in-out-sine' },
                                { label: __('ease-in-quad', 'block-effects'), value: 'ease-in-quad' },
                                { label: __('ease-out-quad', 'block-effects'), value: 'ease-out-quad' },
                                { label: __('ease-in-out-quad', 'block-effects'), value: 'ease-in-out-quad' },
                                { label: __('ease-in-cubic', 'block-effects'), value: 'ease-in-cubic' },
                                { label: __('ease-out-cubic', 'block-effects'), value: 'ease-out-cubic' },
                                { label: __('ease-in-out-cubic', 'block-effects'), value: 'ease-in-out-cubic' },
                                { label: __('ease-in-quart', 'block-effects'), value: 'ease-in-quart' },
                                { label: __('ease-out-quart', 'block-effects'), value: 'ease-out-quart' },
                                { label: __('ease-in-out-quart', 'block-effects'), value: 'ease-in-out-quart' },
                            ]}
                            onChange={animationEasing => props.setAttributes({ animationEasing})}
                        />

                        <TextControl
                            label={__("Duration")}
                            value={props.attributes.animationDuration}
                            onChange={animationDuration => props.setAttributes({ animationDuration })}
                        />

                        <TextControl
                            label={__("Delay")}
                            value={props.attributes.animationDelay}
                            onChange={animationDelay => props.setAttributes({ animationDelay })}
                        />

                    </PanelBody>

                </InspectorControls>
            </Fragment>
        );
    };
}, "withInspectorControl");

wp.hooks.addFilter('editor.BlockEdit', 'block-effects/animate-on-scroll/inspector', withInspectorControls);
