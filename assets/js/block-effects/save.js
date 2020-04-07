import supportedBlocks from './blocks';

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'horttcore/block-effects/save',
    function (element, blockType, attributes) {

        // if ( !window.lodash.includes(supportedBlocks(), blockType.name))
        //     return element;

        if (attributes.animation) {
            element = window.lodash.assign({}, element, {
                props: window.lodash.assign({}, element.props, {
                    'data-aos': attributes.animation,
                })
            });
        }

        if (attributes.animationAnchor) {
            element = window.lodash.assign({}, element, {
                props: window.lodash.assign({}, element.props, {
                    'data-aos-anchor-placement': attributes.animationAnchor,
                })
            });
        }

        if (attributes.animationDuration) {
            element = window.lodash.assign({}, element, {
                props: window.lodash.assign({}, element.props, {
                    'data-aos-duration': attributes.animationDuration,
                })
            });
        }

        if (attributes.animationDuration) {
            element = window.lodash.assign({}, element, {
                props: window.lodash.assign({}, element.props, {
                    'data-aos-delay': attributes.animationDelay,
                })
            });
        }

        return element;
    }
);
