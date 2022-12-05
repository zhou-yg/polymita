var __defProp = Object.defineProperty;
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
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  styleRules: () => styleRules
});
import { h as h2, useLogic } from "tarat-renderer";

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
var radius = {
  normal: "4px"
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
      borderRadius: {
        [radius.normal]: []
      },
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`${colors2.bdw}px`]: [],
        "0px": ["*", "*", "*", true]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [
          [true, "*", "*", false],
          ["*", "*", true, false]
        ],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [(_a = colors2.text) == null ? void 0 : _a[0]]: [],
        [(_b = colors2.text) == null ? void 0 : _b[1]]: [true, "*", "*", false],
        [(_c = colors2.text) == null ? void 0 : _c[2]]: ["*", true, "*", false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  });
}

// components/modal/index.tsx
import { signal as signal2 } from "atomic-signal";

// node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/AccountBookFilled.js
var AccountBookFilled = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zM648.3 426.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V752c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6 1.5-.8 3.1-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3 73.2-144.3a10 10 0 018.9-5.5h45c5.5 0 10 4.5 10 10 .1 1.7-.3 3.3-1.1 4.8z" } }] }, "name": "account-book", "theme": "filled" };
var AccountBookFilled_default = AccountBookFilled;

// node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/AccountBookOutlined.js
var AccountBookOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584zM639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z" } }] }, "name": "account-book", "theme": "outlined" };
var AccountBookOutlined_default = AccountBookOutlined;

// node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/AccountBookTwoTone.js
var AccountBookTwoTone = { "icon": function render(primaryColor, secondaryColor) {
  return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v584h656V256H712v48zm-65.6 121.8l-89.3 164.1h49.1c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4v33.7h65.4c4.4 0 8 3.6 8 8v21.3c0 4.4-3.6 8-8 8h-65.4V752c0 4.4-3.6 8-8 8h-41.3c-4.4 0-8-3.6-8-8v-53.8h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8h65.1v-33.7h-65.1c-4.4 0-8-3.6-8-8v-21.3c0-4.4 3.6-8 8-8H467l-89.3-164c-2.1-3.9-.7-8.8 3.2-10.9 1.1-.7 2.5-1 3.8-1h46a8 8 0 017.1 4.4l73.4 145.4h2.8l73.4-145.4c1.3-2.7 4.1-4.4 7.1-4.4h45c4.5 0 8 3.6 7.9 8 0 1.3-.4 2.6-1 3.8z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M639.5 414h-45c-3 0-5.8 1.7-7.1 4.4L514 563.8h-2.8l-73.4-145.4a8 8 0 00-7.1-4.4h-46c-1.3 0-2.7.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9l89.3 164h-48.6c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1v33.7h-65.1c-4.4 0-8 3.6-8 8v21.3c0 4.4 3.6 8 8 8h65.1V752c0 4.4 3.6 8 8 8h41.3c4.4 0 8-3.6 8-8v-53.8h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-65.4v-33.7h65.4c4.4 0 8-3.6 8-8v-21.3c0-4.4-3.6-8-8-8h-49.1l89.3-164.1c.6-1.2 1-2.5 1-3.8.1-4.4-3.4-8-7.9-8z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v584z", "fill": primaryColor } }] };
}, "name": "account-book", "theme": "twotone" };
var AccountBookTwoTone_default = AccountBookTwoTone;

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

// icons/account-book.tsx
import { h, createComponent } from "tarat-renderer";
var AccountBookFilledSVGString = renderIconDefinitionToSVGElement(AccountBookFilled_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var AccountBookOutlinedSVGString = renderIconDefinitionToSVGElement(AccountBookOutlined_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var AccountBookTwoToneSVGString = renderIconDefinitionToSVGElement(AccountBookTwoTone_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap = {
  filled: AccountBookFilledSVGString,
  outlined: AccountBookOutlinedSVGString,
  twoTone: AccountBookTwoToneSVGString
};
var Icon = createComponent((props = {}) => {
  const style = {
    fontSize: (props.size || 16) + "px",
    color: props.color
  };
  const html = styleMap[props.type];
  return h("polymitaIcon", { _html: html, style });
});
var account_book_default = Icon;

// components/modal/index.tsx
var config = () => ({});
var logic = (props) => {
  const interactive = useInteractive({
    disabled: props.disabled
  });
  const value = signal2(props.value());
  return {
    interactive,
    value
  };
};
var layout = (props) => {
  const logic2 = useLogic();
  return /* @__PURE__ */ h2("inputBox", __spreadValues({
    className: "block"
  }, logic2.interactive.events), account_book_default({ size: 24, color: "red", type: "filled" }), /* @__PURE__ */ h2(account_book_default, {
    size: 24,
    color: "blue",
    type: "outlined"
  }), /* @__PURE__ */ h2("input", {
    type: props.type,
    disabled: props.disabled,
    "is-container": true,
    "has-decoration": true,
    value: logic2.value,
    className: "block select-none outline-none border-0 px-2 py-1"
  }));
};
var designPattern = (props) => {
  const logic2 = useLogic();
  const p = strokePattern(
    {
      hover: logic2.interactive.states.hover(),
      active: logic2.interactive.states.active(),
      selected: logic2.interactive.states.focus(),
      disabled: props.disabled
    },
    {
      bdw: 1,
      border: [colors.grays[0], colors.primaries[1]]
    }
  );
  return p;
};
var styleRules = (props) => {
};

// shared/render.ts
import { createRenderer } from "tarat-renderer";
import React from "react";
function RenderToReactWithWrap(module) {
  const render2 = RenderToReact(module);
  return (p) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render2(p)
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
    renderer.construct(p);
    return renderer.render();
  };
}

// components/modal/demo.mdx
import { useState } from "react";
var Component = RenderToReactWithWrap(modal_exports);
function Box() {
  const [val, setVal] = useState("v0");
  return _jsxs("div", {
    children: [" val: ", val, _jsx("br", {}), _jsx(Component, {
      value: val,
      onInput: (v) => setVal(v)
    })]
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
  Component,
  demo_default as default
};
