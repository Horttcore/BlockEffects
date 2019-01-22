const { createHigherOrderComponent } = wp.compose;

import supportedBlocks from './blocks';

const withDataAnimation = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        if ( !lodash.includes(supportedBlocks(), props.block.name))
            return <BlockListBlock { ...props } />;

        const { animation, animationAnchor, animationDuration } = props.block.attributes;

        let wrapperProps = props.wrapperProps;
        wrapperProps = {
            ...wrapperProps,
            'data-aos': animation,
            'data-aos-anchor-placement': animationAnchor,
            'data-aos-duration': animationDuration,
        };

        return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
    };
}, 'withDataAnimation' );

wp.hooks.addFilter( 'editor.BlockListBlock', 'gutenberg-animate-on-scroll/animate-on-scroll/edit', withDataAnimation );
