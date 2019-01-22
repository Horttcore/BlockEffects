import supportedBlocks from './blocks';

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'horttcore/gutenberg-animate-on-scroll/save',
    function(element, blockType, attributes){

        if ( !lodash.includes(supportedBlocks(), blockType.name))
            return element;

        if ( attributes.animation ) {
            element = lodash.assign( {}, element, {
                props: lodash.assign( {}, element.props, {
                    'data-aos': attributes.animation,
                } )
            } );
        }

        if ( attributes.animationAnchor) {
            element = lodash.assign( {}, element, {
                props: lodash.assign( {}, element.props, {
                    'data-aos-anchor-placement': attributes.animationAnchor,
                } )
            } );
        }

        if ( attributes.animationDuration ) {
            element = lodash.assign( {}, element, {
                props: lodash.assign( {}, element.props, {
                    'data-aos-duration': attributes.animationDuration,
                } )
            } );
        }

        if ( attributes.animationDuration ) {
            element = lodash.assign( {}, element, {
                props: lodash.assign( {}, element.props, {
                    'data-aos-delay': attributes.animationDelay,
                } )
            } );
        }

		return element;
	}
);
