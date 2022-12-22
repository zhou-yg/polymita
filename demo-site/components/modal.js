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

// components/modal/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/modal/index.tsx
var modal_exports = {};
__export(modal_exports, {
  config: () => config,
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  styleRules: () => styleRules2
});
import { h as h3, useLogic as useLogic2, useModule } from "tarat-renderer";

// node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" } }] }, "name": "close", "theme": "outlined" };
var CloseOutlined_default = CloseOutlined;

// node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/helpers.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var defaultColors = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6"
};
function renderIconDefinitionToSVGElement(icond, options) {
  if (options === void 0) {
    options = {};
  }
  if (typeof icond.icon === "function") {
    var placeholders = options.placeholders || defaultColors;
    return renderAbstractNodeToSVGElement(icond.icon(placeholders.primaryColor, placeholders.secondaryColor), options);
  }
  return renderAbstractNodeToSVGElement(icond.icon, options);
}
function renderAbstractNodeToSVGElement(node, options) {
  var targetAttrs = node.tag === "svg" ? __assign(__assign({}, node.attrs), options.extraSVGAttrs || {}) : node.attrs;
  var attrs = Object.keys(targetAttrs).reduce(function(acc, nextKey) {
    var key = nextKey;
    var value = targetAttrs[key];
    var token = key + '="' + value + '"';
    acc.push(token);
    return acc;
  }, []);
  var attrsToken = attrs.length ? " " + attrs.join(" ") : "";
  var children = (node.children || []).map(function(child) {
    return renderAbstractNodeToSVGElement(child, options);
  }).join("");
  if (children && children.length) {
    return "<" + node.tag + attrsToken + ">" + children + "</" + node.tag + ">";
  }
  return "<" + node.tag + attrsToken + " />";
}

// icons/close.tsx
import { h, createComponent } from "tarat-renderer";
var CloseOutlinedSVGString = renderIconDefinitionToSVGElement(CloseOutlined_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap = {
  outlined: CloseOutlinedSVGString
};
var Icon = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color,
    display: "inline-block"
  };
  const cls = props.className;
  const html = styleMap[props.type || "outlined"];
  return h("polymitaIcon", { _html: html, style, className: cls });
});
var close_default = Icon;

// components/Button/index.tsx
var Button_exports = {};
__export(Button_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import { h as h2, useLayout, useLogic } from "tarat-renderer";

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
    var _a;
    if ((_a = props.disabled) == null ? void 0 : _a.call(props))
      return;
    hover(() => true);
  });
  const mouseLeave = action(() => {
    var _a;
    if ((_a = props.disabled) == null ? void 0 : _a.call(props))
      return;
    hover(() => false);
  });
  const mouseDown = action(() => {
    var _a;
    if ((_a = props.disabled) == null ? void 0 : _a.call(props))
      return;
    active(() => true);
  });
  const mouseUp = action(() => {
    var _a;
    if ((_a = props.disabled) == null ? void 0 : _a.call(props))
      return;
    active(() => false);
    focus(() => true);
  });
  const focusIn = () => {
    var _a;
    if ((_a = props.disabled) == null ? void 0 : _a.call(props))
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
function blockPattern2(arg, colors2) {
  return matchPatternMatrix([!!arg.selected, !!arg.disabled])({
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, false],
        [colors.disables[0]]: ["*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", true]
      },
      userSelect: {
        none: []
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false],
        [colors.disables[1]]: ["*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false],
        [colors.disables[1]]: ["*", true]
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

// components/Button/index.tsx
var meta;
var logic = (props) => {
  const interactive = useInteractive(props);
  return {
    interactive,
    count: 0
  };
};
var layout = (props) => {
  const logicResult = useLogic();
  const div = /* @__PURE__ */ h2("div", null, "123");
  const k = 1;
  return /* @__PURE__ */ h2("buttonBox", __spreadProps(__spreadValues({
    className: "inline-block px-2 py-1 rounded hover:cursor-pointer"
  }, logicResult.interactive.events), {
    "is-container": true,
    "has-decoration": true
  }), /* @__PURE__ */ h2("span", {
    "is-text": true,
    className: "block select-none",
    onClick: (e) => {
      var _a;
      if (props.disabled)
        return;
      (_a = props.onClick) == null ? void 0 : _a.call(props, e);
    }
  }, props.children));
};
var designPattern = (props) => {
  const logicResult = useLogic();
  let pattern;
  let pattern2;
  const states = {
    hover: logicResult.interactive.states.hover(),
    active: logicResult.interactive.states.active(),
    disabled: !!props.disabled,
    selected: false
  };
  switch (props.type) {
    case "primary":
      pattern = blockPattern(
        states,
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light]
        }
      );
      pattern2 = blockPattern2(
        states,
        {
          bg: [colors.primaries[1], colors.primaries[2]],
          text: [colors.light]
        }
      );
      break;
    case "text":
      pattern = blockPattern(
        states,
        {
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text]
        }
      );
      break;
    case "link":
      pattern = strokePattern(
        states,
        {
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]]
        }
      );
      break;
    default:
      pattern = strokePattern(
        states,
        {
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]]
        }
      );
      break;
  }
  return __spreadValues({}, pattern);
};
var styleRules = (props, draft) => {
  const logic3 = useLogic();
  const layout3 = useLayout();
  return [];
};

// components/modal/index.tsx
var config = () => ({});
var logic2 = (props) => {
};
var layout2 = (props) => {
  const logic3 = useLogic2();
  const Button = useModule(Button_exports);
  return /* @__PURE__ */ h3("modalBox", {
    className: "block fixed left-0 top-0 w-full h-full"
  }, /* @__PURE__ */ h3("mask", {
    className: "fixed w-full h-full opacity-70 bg-black"
  }), /* @__PURE__ */ h3("modalBody", {
    className: "block relative rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    style: { width: "520px" }
  }, /* @__PURE__ */ h3("closeBox", {
    className: "block absolute top-4 right-4 cursor-pointer",
    onClick: props.onClose
  }, /* @__PURE__ */ h3(close_default, {
    color: "rgba(0,0,0,.45)"
  })), /* @__PURE__ */ h3("content", {
    className: "block p-6",
    style: { minHeight: "40px" }
  }, props.title ? /* @__PURE__ */ h3("contentTitle", {
    className: "block mb-4 font-medium"
  }, props.title) : "", props.children), /* @__PURE__ */ h3("footer", {
    className: "flex gap-2 p-6 flex-row-reverse"
  }, /* @__PURE__ */ h3(Button, {
    type: "primary"
  }, "\u786E\u5B9A"), /* @__PURE__ */ h3(Button, null, "\u53D6\u6D88"))));
};
var designPattern2 = (props) => {
};
var styleRules2 = (props) => {
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

// components/modal/demo.mdx
import { useState } from "react";
var Component = RenderToReactWithWrap(modal_exports);
var ButtonComponent = RenderToReactWithWrap(Button_exports);
function Box() {
  const [show, setShow] = useState(false);
  return _jsxs("div", {
    children: [_jsx(ButtonComponent, {
      onClick: () => setShow((v) => !v),
      children: "show modal"
    }), show ? _jsxs(Component, {
      title: "My Modal",
      onClose: (v) => setShow(false),
      children: [_jsx("p", {
        children: " i am content row 1 "
      }), _jsx("p", {
        children: " i am content row 2 "
      })]
    }) : ""]
  });
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Modal \u5F39\u6846"
    }), "\n", _jsx(_components.p, {
      children: "\u5B8C\u5168\u53D7\u63A7"
    }), "\n", _jsx(Box, {})]
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
  Box,
  ButtonComponent,
  Component,
  demo_default as default
};
