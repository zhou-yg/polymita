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

// components/select/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/select/index.tsx
var select_exports = {};
__export(select_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta,
  styleRules: () => styleRules2
});
import { h as h2, useLogic as useLogic2, useModule } from "tarat-renderer";
import { signal as signal3 } from "atomic-signal";

// components/input/index.tsx
var input_exports = {};
__export(input_exports, {
  config: () => config,
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
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

// components/input/index.tsx
import { after, signal as signal2 } from "atomic-signal";
var config = () => ({});
var logic = (props) => {
  var _a;
  const interactive = useInteractive({
    disabled: props.disabled
  });
  const value = signal2((_a = props.value) == null ? void 0 : _a.call(props));
  after(() => {
    var _a2;
    (_a2 = props.onInput) == null ? void 0 : _a2.call(props, value());
  }, [value]);
  return {
    interactive,
    value
  };
};
var layout = (props) => {
  const logic3 = useLogic();
  return /* @__PURE__ */ h("inputBox", __spreadValues({
    className: "block"
  }, logic3.interactive.events), /* @__PURE__ */ h("input", {
    type: props.type,
    disabled: props.disabled,
    "is-container": true,
    "has-decoration": true,
    value: logic3.value,
    className: "block select-none outline-none border-0 px-2 py-1 rounded"
  }));
};
var designPattern = (props) => {
  const logic3 = useLogic();
  const p = strokePattern(
    {
      hover: logic3.interactive.states.hover(),
      active: logic3.interactive.states.active(),
      selected: logic3.interactive.states.focus(),
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

// components/select/index.tsx
var meta;
var logic2 = (props) => {
  var _a;
  const current = signal3((_a = props.value) == null ? void 0 : _a.call(props));
  return {
    current
  };
};
var layout2 = (props) => {
  const logic3 = useLogic2();
  const Input = useModule(input_exports);
  return /* @__PURE__ */ h2("selectContainer", {
    className: "block"
  }, /* @__PURE__ */ h2(Input, null));
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

// components/select/demo.mdx
var Component = RenderToReactWithWrap(select_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Select \u4E0B\u62C9\u9009\u62E9\u5668"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u4F7F\u7528"
    }), "\n", _jsx(Component, {
      value: "A",
      options: [{
        value: "A",
        label: "A"
      }, {
        value: "B",
        label: "B"
      }, {
        value: "C",
        label: "C"
      }]
    }), "\n", _jsx(_components.p, {
      children: "\u7981\u6B62\u6837\u5F0F"
    }), "\n", _jsx(Component, {
      disabled: true
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
