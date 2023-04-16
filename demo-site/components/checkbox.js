var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/checkbox/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/checkbox/index.tsx
var checkbox_exports = {};
__export(checkbox_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  propTypes: () => propTypes
});
import { ACTIVE, h as h2, HOVER, PropTypes, useLogic } from "@polymita/renderer";
import { after, signal as signal2 } from "@polymita/signal";

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

// node_modules/.pnpm/@ant-design+icons-svg@4.2.1/node_modules/@ant-design/icons-svg/es/asn/CheckOutlined.js
var CheckOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
var CheckOutlined_default = CheckOutlined;

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

// icons/check.tsx
import { h, createComponent } from "@polymita/renderer";
var CheckOutlinedSVGString = renderIconDefinitionToSVGElement(CheckOutlined_default, {
  extraSVGAttrs: { width: "1em", height: "1em", fill: "currentColor" }
});
var styleMap = {
  outlined: CheckOutlinedSVGString
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
var check_default = Icon;

// components/checkbox/index.tsx
var meta;
var propTypes = {
  value: PropTypes.signal.isRequired.default(() => signal2(false))
};
var logic = (props) => {
  const value = props.value;
  after(() => {
    console.log("value:", value());
  }, [value]);
  function toggle() {
    var _a;
    if (props.disabled)
      return;
    value((v) => !v);
    (_a = props.onChange) == null ? void 0 : _a.call(props, value());
  }
  return {
    value,
    toggle
  };
};
var layout = (props) => {
  const logic2 = useLogic();
  return /* @__PURE__ */ h2(
    "checkBoxContainer",
    {
      className: "relative flex items-center",
      onClick: logic2.toggle
    },
    /* @__PURE__ */ h2(
      "checkBox",
      {
        className: "relative block mr-2 rounded ",
        style: { width: "16px", height: "16px" },
        "is-container": true,
        "has-decoration": true,
        selected: logic2.value(),
        disabled: props.disabled
      },
      /* @__PURE__ */ h2("input", { type: "checkbox", readOnly: true, checked: logic2.value(), className: "opacity-0 absolute w-full h-full" }),
      /* @__PURE__ */ h2(
        "span",
        {
          "is-text": true,
          selected: logic2.value(),
          disabled: props.disabled,
          className: "relative z-10 w-full h-full flex items-center justify-center"
        },
        logic2.value() ? /* @__PURE__ */ h2(check_default, { size: 12 }) : ""
      )
    ),
    /* @__PURE__ */ h2("checkBoxLabel", { className: "select-none" }, props.children)
  );
};
var designPatterns = (props) => {
  const logicResult = useLogic();
  const arr = [HOVER, ACTIVE, "selected", "disabled"];
  if (logicResult.value()) {
    return [
      arr,
      blockPatternMatrix(
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2], colors.primaries[0]],
          text: [colors.light, colors.light, colors.light, colors.light]
        }
      )
    ];
  } else {
    return [
      arr,
      strokePatternMatrix({
        bdw: 1,
        border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
        text: [colors.text, colors.primaries[1], colors.primaries[2]]
      })
    ];
  }
};

// shared/render.ts
import { createRSRenderer } from "@polymita/renderer";
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

// components/checkbox/demo.mdx
var Component = RenderToReactWithWrap(checkbox_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Checkbox \u591A\u9009\u6846"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u4F7F\u7528"
    }), "\n", _jsx(Component, {
      children: " \u591A\u9009\u9879 "
    }), "\n", _jsx(_components.p, {
      children: "\u7981\u6B62\u6837\u5F0F"
    }), "\n", _jsx(Component, {
      disabled: true,
      children: " \u7981\u6B62\u9009\u9879 "
    }), "\n", _jsx(Component, {
      disabled: true,
      value: true,
      children: " \u7981\u6B62\u5F00\u542F "
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
