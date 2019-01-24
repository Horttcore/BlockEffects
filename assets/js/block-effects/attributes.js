import supportedBlocks from './blocks';

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'horttcore/block-effects/attribute',
	function( settings, name ) {

		if ( !window.lodash.includes(supportedBlocks(),name))
            return settings;

		settings = window.lodash.assign( {}, settings, {
			attributes: window.lodash.assign( {}, settings.attributes, {
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
