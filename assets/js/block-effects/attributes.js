const { assign } = lodash;

wp.hooks.addFilter(
  "blocks.registerBlockType",
  "horttcore/block-effects/attribute",
  function (settings, name) {
    settings = assign({}, settings, {
      attributes: assign({}, settings.attributes, {
        animation: {
          type: "string",
        },
        animationAnchor: {
          type: "string",
        },
        animationDelay: {
          type: "string",
        },
        animationDuration: {
          type: "string",
        },
        animationEasing: {
          type: "string",
        },
      }),
    });
    return settings;
  }
);
