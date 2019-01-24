const { __ } = wp.i18n;

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { TextControl, SelectControl, PanelBody, IconButton } = wp.components;

import supportedBlocks from './blocks';

const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        if ( !window.lodash.includes(supportedBlocks(), props.name))
            return (
                <BlockEdit { ...props } />
            );

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls key="inspector">

                    <PanelBody title={ __('Animations', 'block-effects') } initialOpen={true}>

                    <SelectControl
                        label={ __( 'Animation', 'block-effects' ) }
                        value={ props.attributes.animation }
                        options={ [
                            { label: __( 'Default','block-effects' ), value: '' },
                            { label: __( 'Fade','block-effects' ), value: 'fade' },
                            { label: __( 'Fade up','block-effects' ), value: 'fade-up' },
                            { label: __( 'Fade down','block-effects' ), value: 'fade-down' },
                            { label: __( 'Fade left','block-effects' ), value: 'fade-left' },
                            { label: __( 'Fade right','block-effects' ), value: 'fade-right' },
                            { label: __( 'Fade up right','block-effects' ), value: 'fade-up-right' },
                            { label: __( 'Fade up left','block-effects' ), value: 'fade-up-left' },
                            { label: __( 'Fade down right','block-effects' ), value: 'fade-down-right' },
                            { label: __( 'Fade down left','block-effects' ), value: 'fade-down-left' },
                            { label: __( 'Flip Up','block-effects' ), value: 'flip-up' },
                            { label: __( 'Flip Down','block-effects' ), value: 'flip-down' },
                            { label: __( 'Flip Left','block-effects' ), value: 'flip-left' },
                            { label: __( 'Flip Right','block-effects' ), value: 'flip-right' },
                            { label: __( 'Slide up','block-effects' ), value: 'slide-up' },
                            { label: __( 'Slide down','block-effects' ), value: 'slide-down' },
                            { label: __( 'Slide left','block-effects' ), value: 'slide-left' },
                            { label: __( 'Slide right','block-effects' ), value: 'slide-right' },
                            { label: __( 'Zoom in','block-effects' ), value: 'zoom-in' },
                            { label: __( 'Zoom in up','block-effects' ), value: 'zoom-in-up' },
                            { label: __( 'Zoom in down','block-effects' ), value: 'zoom-in-down' },
                            { label: __( 'Zoom in left','block-effects' ), value: 'zoom-in-left' },
                            { label: __( 'Zoom in right','block-effects' ), value: 'zoom-in-right' },
                            { label: __( 'Zoom out','block-effects' ), value: 'zoom-out' },
                            { label: __( 'Zoom out up','block-effects' ), value: 'zoom-out-up' },
                            { label: __( 'Zoom out down','block-effects' ), value: 'zoom-out-down' },
                            { label: __( 'Zoom out left','block-effects' ), value: 'zoom-out-left' },
                            { label: __( 'Zoom out right','block-effects' ), value: 'zoom-out-right' },
                        ] }
                        onChange={value => props.setAttributes({ animation: value })}
                    />

                    <SelectControl
                        label={ __( 'Anchor', 'block-effects' ) }
                        // value={ animationAnchor }
                        options={ [
                            { label: __( 'Default','block-effects' ), value: '' },
                            { label: __( 'Top-Bottom','block-effects' ), value: 'top-bottom' },
                            { label: __( 'Top-Center','block-effects' ), value: 'top-center' },
                            { label: __( 'Top-Top','block-effects' ), value: 'top-top' },
                            { label: __( 'Center-Bottom','block-effects' ), value: 'center-bottom' },
                            { label: __( 'Center-Center','block-effects' ), value: 'center-center' },
                            { label: __( 'Center-Top','block-effects' ), value: 'center-top' },
                            { label: __( 'Bottom-Bottom','block-effects' ), value: 'bottom-bottom' },
                            { label: __( 'Bottom-Center','block-effects' ), value: 'bottom-center' },
                            { label: __( 'Bottom-Top','block-effects' ), value: 'bottom-top' },
                        ] }
                        onChange={value => props.setAttributes({ animationAnchor: value })}
                    />

                    <TextControl
                        label={__("Duration")}
                        // value={animationDuration}
                        onChange={value => props.setAttributes({ animationDuration: value })}
                    />

                    <TextControl
                        label={__("Delay")}
                        // value={animationDuration}
                        onChange={value => props.setAttributes({ animationDelay: value })}
                    />

                </PanelBody>

              </InspectorControls>
            </Fragment>
        );
    };
}, "withInspectorControl" );

wp.hooks.addFilter( 'editor.BlockEdit', 'block-effects/animate-on-scroll/inspector', withInspectorControls );
