import { createHigherOrderComponent } from '@wordpress/compose';

const withDataAnimation = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {

        const { animation, animationAnchor, animationDuration, animationDelay, animationEasing } = props.block.attributes;

        let wrapperProps = props.wrapperProps;
        wrapperProps = {
            ...wrapperProps,
            'data-aos': animation,
            'data-aos-anchor-placement': animationAnchor,
            'data-aos-easing': animationEasing,
            'data-aos-duration': animationDuration,
            'data-aos-delay': animationDelay
       };

        return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
    };
}, 'withDataAnimation');

wp.hooks.addFilter('editor.BlockListBlock', 'block-effects/animate-on-scroll/edit', withDataAnimation);
