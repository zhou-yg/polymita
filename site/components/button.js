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

// components/button/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/button/index.tsx
var button_exports = {};
__export(button_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  styleRules: () => styleRules
});
import { h, useLayout, useLogic } from "tarat-renderer";

// patterns/control-active.tsx
import { matchPatternMatrix } from "tarat-renderer";
import { action, signal } from "atomic-signal";

// patterns/token.ts
var colors = {
  primaries: [
    "#4096ff",
    "#1677ff",
    "#0958d9"
  ],
  grays: [
    "#f0f0f0",
    "#d9d9d9",
    "#bfbfbf"
  ],
  dangers: [
    "#ff4d4f",
    "#f5222d",
    "#cf1322"
  ],
  disables: [
    "rgba(0,0,0,.1)",
    "rgba(0,0,0,.3)"
  ],
  nones: ["#ffffff", "#fffffe", "#fffefe"],
  none: "#fff",
  text: "#434343"
};

// patterns/control-active.tsx
function useInteractive(props) {
  const hover = signal(false);
  const active = signal(false);
  const mouseOver = action(() => {
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
  });
  return {
    states: {
      hover,
      active
    },
    events: {
      onMouseOver: mouseOver,
      onMouseLeave: mouseLeave,
      onMouseDown: mouseDown,
      onMouseUp: mouseUp
    }
  };
}
function blockPattern(arg, colors2) {
  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
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
      "user-select": {
        none: []
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
    }
  });
}
function strokePattern(arg, colors2) {
  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    border: {
      borderStyle: {
        solid: []
      },
      borderWidth: {
        [`${colors2.bdw}px`]: [],
        "0px": ["*", "*", "*", true]
      },
      borderColor: {
        [colors2.border[0]]: [],
        [colors2.border[1]]: [true, "*", "*", false],
        [colors2.border[2]]: ["*", true, "*", false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  });
}

// components/button/index.tsx
var logic = (props) => {
  const interactive = useInteractive(props);
  return {
    interactive,
    count: 0
  };
};
var layout = (props) => {
  const logicResult = useLogic();
  return /* @__PURE__ */ h("buttonBox", __spreadProps(__spreadValues({
    className: "inline-block px-2 py-1 rounded-lg hover:cursor-pointer"
  }, logicResult.interactive.events), {
    "is-container": true,
    "has-border": true
  }), /* @__PURE__ */ h("span", {
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
  const states = __spreadProps(__spreadValues({}, logicResult.interactive.states), {
    disabled: !!props.disabled,
    selected: false
  });
  switch (props.type) {
    case "primary":
      pattern = blockPattern(
        states,
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.none]
        }
      );
      break;
    case "text":
      pattern = blockPattern(
        states,
        {
          bg: [colors.none, colors.grays[0], colors.grays[1]],
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
  return pattern;
};
var styleRules = (props) => {
  const logic2 = useLogic();
  const layout2 = useLayout();
  return [];
};

// shared/render.ts
import { createRenderer } from "tarat-renderer";
import React from "react";
function RenderToReact(module) {
  const renderer = createRenderer(module, {
    framework: {
      name: "react",
      lib: React
    }
  });
  return (p) => {
    return renderer.render(p);
  };
}

// components/button/demo.mdx
var Component = RenderToReact(button_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Button \u6309\u94AE"
    }), "\n", _jsx(_components.p, {
      children: "\u6807\u8BB0\u4E86\u4E00\u4E2A\uFF08\u6216\u5C01\u88C5\u4E00\u7EC4\uFF09\u64CD\u4F5C\u547D\u4EE4\uFF0C\u54CD\u5E94\u7528\u6237\u70B9\u51FB\u884C\u4E3A\uFF0C\u89E6\u53D1\u76F8\u5E94\u7684\u4E1A\u52A1\u903B\u8F91"
    }), "\n", _jsx(Component, {
      type: "primary",
      onClick: () => console.log("click on primary"),
      children: "Primary Button"
    }), "\n", _jsx(Component, {
      type: "text",
      children: "Text Button"
    }), "\n", _jsx(Component, {
      children: "Default Button"
    }), "\n", _jsx(Component, {
      type: "link",
      children: "Link Button"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u7684\u6309\u94AE\u5C55\u793A"
    }), "\n", _jsx(Component, {
      disabled: true,
      type: "primary",
      onClick: () => console.log("click on primary"),
      children: "Primary Button"
    }), "\n", _jsx(Component, {
      disabled: true,
      type: "text",
      children: "Text Button"
    }), "\n", _jsx(Component, {
      disabled: true,
      children: "Default Button"
    }), "\n", _jsx(Component, {
      disabled: true,
      type: "link",
      children: "Link Button"
    }), "\n", _jsx(_components.p, {
      children: "disabled \u6309\u94AE\u5C55\u793A"
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
