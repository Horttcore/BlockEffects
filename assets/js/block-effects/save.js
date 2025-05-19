const { assign } = lodash;

wp.hooks.addFilter(
  "blocks.getSaveElement",
  "horttcore/block-effects/save",
  function (element, blockType, attributes) {
    if (attributes.animation) {
      element = assign({}, element, {
        props: assign({}, element.props, {
          "data-aos": attributes.animation,
        }),
      });
    }

    if (attributes.animationAnchor) {
      element = assign({}, element, {
        props: assign({}, element.props, {
          "data-aos-anchor-placement": attributes.animationAnchor,
        }),
      });
    }

    if (attributes.animationDuration) {
      element = assign({}, element, {
        props: assign({}, element.props, {
          "data-aos-duration": attributes.animationDuration,
        }),
      });
    }

    if (attributes.animationDelay) {
      element = assign({}, element, {
        props: assign({}, element.props, {
          "data-aos-delay": attributes.animationDelay,
        }),
      });
    }

    if (attributes.animationEasing) {
      element = assign({}, element, {
        props: assign({}, element.props, {
          "data-aos-easing": attributes.animationEasing,
        }),
      });
    }

    return element;
  }
);
