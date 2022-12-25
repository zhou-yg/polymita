var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/radio-group/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/radio-group/index.tsx
var radio_group_exports = {};
__export(radio_group_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  propTypes: () => propTypes,
  styleRules: () => styleRules2
});
import { h as h2, useLogic as useLogic2, useModule, PropTypes } from "tarat-renderer";
import { signal as signal2 } from "atomic-signal";

// components/radio/index.tsx
var radio_exports = {};
__export(radio_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import { h, useLogic } from "tarat-renderer";

// patterns/control-active.ts
import { matchPatternMatrix } from "tarat-renderer";
import { action, dispose, signal } from "atomic-signal";

// patterns/token.ts
var colors = {
  primaries: ["#4096ff", "#1677ff", "#0958d9"],
  grays: ["#f0f0f0", "#d9d9d9", "#bfbfbf"],
  dangers: ["#ff4d4f", "#f5222d", "#cf1322"],
  disables: ["rgba(0,0,0,.1)", "rgba(0,0,0,.3)"],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  light: "#ffffff",
  none: "",
  text: "#434343"
};

// patterns/control-active.ts
function useInteractive(props) {
  const hover = signal(false);
  const active = signal(false);
  const focus = signal(false);
  const mouseEnter = action(() => {
    if (props.disabled)
      return;
    hover(() => true);
  });
  const mouseLeave = action(() => {
    if (props.disabled)
      return;
    hover(() => false);
  });
  const mouseDown = action(() => {
    if (props.disabled)
      return;
    active(() => true);
  });
  const mouseUp = action(() => {
    if (props.disabled)
      return;
    active(() => false);
    focus(() => true);
  });
  const focusIn = () => {
    if (props.disabled)
      return;
    focus(() => false);
  };
  document.addEventListener("mouseup", focusIn, true);
  dispose(() => {
    document.removeEventListener("mouseup", focusIn);
  });
  return {
    states: {
      hover,
      active,
      focus
    },
    events: {
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave,
      onMouseDown: mouseDown,
      onMouseUp: mouseUp
    }
  };
}
function blockPattern(arg, colors2) {
  return matchPatternMatrix([
    !!arg.hover,
    !!arg.active,
    !!arg.selected,
    !!arg.disabled
  ])({
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", "*", false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  });
}
function strokePattern(arg, colors2) {
  var _a, _b, _c;
  return matchPatternMatrix([
    !!arg.hover,
    !!arg.active,
    !!arg.selected,
    !!arg.disabled
  ])({
    container: {
      backgroundColor: {
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    decoration: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`1px`]: [
          [],
          ["*", "*", "*", true]
        ]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    }
  });
}

// components/radio/index.tsx
var meta;
var logic = (props) => {
  const interactive = useInteractive(props);
  return {
    interactive
  };
};
var layout = (props) => {
  const logic3 = useLogic();
  return /* @__PURE__ */ h("radioContainer", __spreadProps(__spreadValues({
    className: "relative flex items-center cursor-pointer"
  }, logic3.interactive.events), {
    onClick: () => {
      var _a;
      return !props.disabled && ((_a = props.onChange) == null ? void 0 : _a.call(props, !props.selected));
    }
  }), /* @__PURE__ */ h("radioBox", {
    className: "relative block mr-2 rounded-full ",
    style: { width: "16px", height: "16px" },
    "is-container": true,
    "has-decoration": true
  }, /* @__PURE__ */ h("input", {
    type: "checkbox",
    readOnly: true,
    checked: props.selected,
    className: "opacity-0 absolute w-full h-full"
  }), /* @__PURE__ */ h("span", {
    className: "relative z-10 w-full h-full flex items-center justify-center"
  }, props.selected ? /* @__PURE__ */ h("circle", {
    "is-fillText": true,
    className: "block rounded-full",
    style: { width: "6px", height: "6px" }
  }) : "")), /* @__PURE__ */ h("checkBoxLabel", {
    className: "select-none"
  }, props.children));
};
var styleRules = (props, layout3) => {
  return [];
};
var designPattern = (props, layout3) => {
  const logicResult = useLogic();
  let pattern;
  const states = {
    hover: logicResult.interactive.states.hover(),
    active: logicResult.interactive.states.active(),
    disabled: props.disabled,
    selected: props.selected
  };
  if (states.selected) {
    pattern = blockPattern(
      states,
      {
        bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2], colors.primaries[0]],
        text: [colors.light, colors.light, colors.light, colors.light]
      }
    );
  } else {
    pattern = strokePattern(
      states,
      {
        bdw: 1,
        border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
        text: [colors.text, colors.primaries[1], colors.primaries[2]]
      }
    );
  }
  return __spreadValues({}, pattern);
};

// components/radio-group/index.tsx
var meta2;
var propTypes = {
  value: PropTypes.signal.isRequired.default(signal2(""))
};
var logic2 = (props) => {
  const value = signal2(props.value());
  return {
    value
  };
};
var layout2 = (props) => {
  const logic3 = useLogic2();
  const Radio = useModule(radio_exports);
  const currentValue = logic3.value();
  return /* @__PURE__ */ h2("radioGroupContainer", null, props.options.map((option, index) => {
    return /* @__PURE__ */ h2(Radio, {
      key: option.label,
      selected: currentValue === option.value,
      onChange: () => {
        logic3.value(option.value);
      }
    }, option.label);
  }));
};
var styleRules2 = (props, layout3) => {
  return [];
};
var designPattern2 = (props, layout3) => {
  const logic3 = useLogic2();
  return {};
};

// shared/render.ts
import { createRenderer } from "tarat-renderer";
import React from "react";
function RenderToReactWithWrap(module) {
  const render = RenderToReact(module);
  return (p) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render(p)
    );
  };
}
function RenderToReact(module) {
  const renderer = createRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p) => {
    const r = renderer.construct(p);
    return renderer.render();
  };
}

// components/radio-group/demo.mdx
var Component = RenderToReactWithWrap(radio_group_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "RadioGroup \u5355\u9009\u6846\u7EC4"
    }), "\n", _jsx(_components.p, {
      children: "\u591A\u4E2A\u9009\u9879"
    }), "\n", _jsx(Component, {
      name: "char",
      value: "A",
      options: [{
        label: "A",
        value: "A"
      }, {
        label: "B",
        value: "B"
      }, {
        label: "C",
        value: "C"
      }]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var demo_default = MDXContent;
export {
  Component,
  demo_default as default
};
