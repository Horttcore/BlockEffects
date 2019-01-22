import supportedBlocks from './blocks';

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'horttcore/gutenberg-animate-on-scroll/attribute',
	function( settings, name ) {

		if ( !lodash.includes(supportedBlocks(),name))
            return settings;

		settings = lodash.assign( {}, settings, {
			attributes: lodash.assign( {}, settings.attributes, {
				animation: {
					type: 'string',
				},
				animationAnchor: {
					type: 'string',
				},
				animationDelay: {
					type: 'number',
				},
				animationDuration: {
					type: 'string',
				}
			} ),
		} );
		return settings;
	}
);
