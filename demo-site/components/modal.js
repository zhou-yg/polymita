var __defProp = Object.defineProperty;
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
  layout: () => layout2,
  logic: () => logic2,
  styleRules: () => styleRules2
});
import { createFunctionComponent as createFunctionComponent2, h as h3 } from "@polymita/renderer";

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
import { h, createFunctionComponent } from "@polymita/renderer";
var CloseOutlinedSVGString = renderIconDefinitionToSVGElement(
  CloseOutlined_default,
  {
    extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
  }
);
var styleMap = {
  outlined: CloseOutlinedSVGString
};
var Icon = createFunctionComponent({
  layout: (props = {}) => {
    const style = {
      fontSize: (props.size || 16) + "px",
      color: props.color,
      display: "inline-block"
    };
    const cls = props.className;
    const html = styleMap[props.type || "outlined"];
    return h("polymitaIcon", { _html: html, style, className: cls });
  }
});
var close_default = Icon;

// components/Button/index.tsx
var Button_exports = {};
__export(Button_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import {
  ACTIVE,
  h as h2,
  HOVER,
  useLayout,
  useLogic
} from "@polymita/renderer";

// patterns/control-active.ts
import { matchPatternMatrix } from "@polymita/renderer";
import { action, dispose, signal } from "@polymita/signal";

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
function blockPatternMatrix(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
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
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
function strokePatternMatrix(colors2) {
  var _a, _b, _c;
  return {
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
  };
}

// components/Button/index.tsx
var meta;
var logic = (props) => {
  return {
    count: 0
  };
};
var layout = (props) => {
  const logicResult = useLogic();
  return /* @__PURE__ */ h2(
    "buttonBox",
    {
      className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
      "is-container": true,
      "has-decoration": true,
      "is-text": true,
      selected: false,
      disabled: props.disabled,
      onClick: (e) => {
        var _a;
        if (props.disabled)
          return;
        (_a = props.onClick) == null ? void 0 : _a.call(props, e);
      }
    },
    /* @__PURE__ */ h2(
      "span",
      {
        className: "block select-none"
      },
      props.children
    )
  );
};
var designPatterns = (props) => {
  const logicResult = useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text]
        })
      ];
      break;
    case "link":
      return [
        entry,
        strokePatternMatrix({
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]]
        })
      ];
      break;
    default:
      return [
        entry,
        strokePatternMatrix({
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]]
        })
      ];
      break;
  }
};
var styleRules = (props, draft) => {
  const logic3 = useLogic();
  const layout3 = useLayout();
  return [];
};

// components/modal/index.tsx
var config = () => ({});
var logic2 = (props) => {
  return {};
};
var Button = createFunctionComponent2(Button_exports);
var layout2 = (props) => {
  return /* @__PURE__ */ h3(
    "modalBox",
    {
      className: "block fixed left-0 top-0 w-full h-full"
    },
    /* @__PURE__ */ h3("modalMask", { onClick: props.onClose, className: "fixed top-0 left-0 w-full h-full opacity-70 bg-black" }),
    /* @__PURE__ */ h3(
      "modalBody",
      {
        className: "block relative rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        style: { width: "520px" }
      },
      /* @__PURE__ */ h3("closeBox", { className: "block absolute top-4 right-4 cursor-pointer", onClick: props.onClose }, /* @__PURE__ */ h3(close_default, { color: "rgba(0,0,0,.45)" })),
      /* @__PURE__ */ h3("modalContent", { className: "block p-4", style: { minHeight: "40px" } }, props.title ? /* @__PURE__ */ h3("contentTitle", { className: "block mb-4 font-medium" }, props.title) : "", props.children),
      /* @__PURE__ */ h3("footer", { className: "flex gap-2 p-4 flex-row-reverse" }, /* @__PURE__ */ h3(Button, { type: "primary", onClick: (e) => {
        var _a;
        (_a = props.onOk) == null ? void 0 : _a.call(props, e);
      } }, "\u786E\u5B9A"), /* @__PURE__ */ h3(Button, { onClick: (e) => {
        var _a, _b;
        (_a = props.onCancel) == null ? void 0 : _a.call(props, e);
        (_b = props.onClose) == null ? void 0 : _b.call(props, e);
      } }, "\u53D6\u6D88"))
    )
  );
};
var designPattern = (props) => {
};
var styleRules2 = (props) => {
};

// shared/render.ts
import { createRSRenderer } from "@polymita/renderer";
import React from "react";
function RenderToReactWithWrap(module) {
  const render = RenderToReact(module);
  return (p) => {
    const content = render(p);
    console.log("content: ", content);
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      content
    );
  };
}
function RenderToReact(module) {
  const renderer = createRSRenderer(module, {
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
