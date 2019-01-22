const { __ } = wp.i18n;

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { TextControl, SelectControl, PanelBody, IconButton } = wp.components;

import supportedBlocks from './blocks';

const withInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        if ( !lodash.includes(supportedBlocks(), props.name))
            return (
                <BlockEdit { ...props } />
            );

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls key="inspector">

                    <PanelBody title={ __('Animations', 'gutenberg-animate-on-scroll') } initialOpen={true}>

                    <SelectControl
                        label={ __( 'Animation', 'gutenberg-animate-on-scroll' ) }
                        value={ props.attributes.animation }
                        options={ [
                            { label: __( 'Default','gutenberg-animate-on-scroll' ), value: '' },
                            { label: __( 'Fade','gutenberg-animate-on-scroll' ), value: 'fade' },
                            { label: __( 'Fade up','gutenberg-animate-on-scroll' ), value: 'fade-up' },
                            { label: __( 'Fade down','gutenberg-animate-on-scroll' ), value: 'fade-down' },
                            { label: __( 'Fade left','gutenberg-animate-on-scroll' ), value: 'fade-left' },
                            { label: __( 'Fade right','gutenberg-animate-on-scroll' ), value: 'fade-right' },
                            { label: __( 'Fade up right','gutenberg-animate-on-scroll' ), value: 'fade-up-right' },
                            { label: __( 'Fade up left','gutenberg-animate-on-scroll' ), value: 'fade-up-left' },
                            { label: __( 'Fade down right','gutenberg-animate-on-scroll' ), value: 'fade-down-right' },
                            { label: __( 'Fade down left','gutenberg-animate-on-scroll' ), value: 'fade-down-left' },
                            { label: __( 'Flip Up','gutenberg-animate-on-scroll' ), value: 'flip-up' },
                            { label: __( 'Flip Down','gutenberg-animate-on-scroll' ), value: 'flip-down' },
                            { label: __( 'Flip Left','gutenberg-animate-on-scroll' ), value: 'flip-left' },
                            { label: __( 'Flip Right','gutenberg-animate-on-scroll' ), value: 'flip-right' },
                            { label: __( 'Slide up','gutenberg-animate-on-scroll' ), value: 'slide-up' },
                            { label: __( 'Slide down','gutenberg-animate-on-scroll' ), value: 'slide-down' },
                            { label: __( 'Slide left','gutenberg-animate-on-scroll' ), value: 'slide-left' },
                            { label: __( 'Slide right','gutenberg-animate-on-scroll' ), value: 'slide-right' },
                            { label: __( 'Zoom in','gutenberg-animate-on-scroll' ), value: 'zoom-in' },
                            { label: __( 'Zoom in up','gutenberg-animate-on-scroll' ), value: 'zoom-in-up' },
                            { label: __( 'Zoom in down','gutenberg-animate-on-scroll' ), value: 'zoom-in-down' },
                            { label: __( 'Zoom in left','gutenberg-animate-on-scroll' ), value: 'zoom-in-left' },
                            { label: __( 'Zoom in right','gutenberg-animate-on-scroll' ), value: 'zoom-in-right' },
                            { label: __( 'Zoom out','gutenberg-animate-on-scroll' ), value: 'zoom-out' },
                            { label: __( 'Zoom out up','gutenberg-animate-on-scroll' ), value: 'zoom-out-up' },
                            { label: __( 'Zoom out down','gutenberg-animate-on-scroll' ), value: 'zoom-out-down' },
                            { label: __( 'Zoom out left','gutenberg-animate-on-scroll' ), value: 'zoom-out-left' },
                            { label: __( 'Zoom out right','gutenberg-animate-on-scroll' ), value: 'zoom-out-right' },
                        ] }
                        onChange={value => props.setAttributes({ animation: value })}
                    />

                    <SelectControl
                        label={ __( 'Anchor', 'gutenberg-animate-on-scroll' ) }
                        // value={ animationAnchor }
                        options={ [
                            { label: __( 'Default','gutenberg-animate-on-scroll' ), value: '' },
                            { label: __( 'Top-Bottom','gutenberg-animate-on-scroll' ), value: 'top-bottom' },
                            { label: __( 'Top-Center','gutenberg-animate-on-scroll' ), value: 'top-center' },
                            { label: __( 'Top-Top','gutenberg-animate-on-scroll' ), value: 'top-top' },
                            { label: __( 'Center-Bottom','gutenberg-animate-on-scroll' ), value: 'center-bottom' },
                            { label: __( 'Center-Center','gutenberg-animate-on-scroll' ), value: 'center-center' },
                            { label: __( 'Center-Top','gutenberg-animate-on-scroll' ), value: 'center-top' },
                            { label: __( 'Bottom-Bottom','gutenberg-animate-on-scroll' ), value: 'bottom-bottom' },
                            { label: __( 'Bottom-Center','gutenberg-animate-on-scroll' ), value: 'bottom-center' },
                            { label: __( 'Bottom-Top','gutenberg-animate-on-scroll' ), value: 'bottom-top' },
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

wp.hooks.addFilter( 'editor.BlockEdit', 'gutenberg-animate-on-scroll/animate-on-scroll/inspector', withInspectorControls );
