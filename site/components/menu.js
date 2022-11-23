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

// components/menu/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/menu/index.tsx
var menu_exports = {};
__export(menu_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  styleRules: () => styleRules2
});
import { action as action2, signal as signal2 } from "atomic-signal";
import { useModule } from "tarat-renderer";
import { h as h2, useLogic as useLogic2 } from "tarat-renderer";

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

// components/menu-item/index.tsx
var menu_item_exports = {};
__export(menu_item_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  styleRules: () => styleRules
});
import { h, useLogic } from "tarat-renderer";
var logic = (props) => {
  const interactive = useInteractive(props);
  return {
    interactive
  };
};
var layout = (props) => {
  const logic3 = useLogic();
  return /* @__PURE__ */ h("menuItem", __spreadValues({
    "is-container": true,
    className: "block p-2 px-3 rounded-lg"
  }, logic3.interactive.events), /* @__PURE__ */ h("span", {
    "is-text": true
  }, props.label));
};
var designPattern = (props) => {
  const logic3 = useLogic();
  const pattern = blockPattern(__spreadProps(__spreadValues({}, logic3.interactive.states), {
    selected: !!props.selected,
    disabled: !!props.disabled
  }), {
    bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
    text: [colors.text, colors.none, colors.nones[0], colors.nones[1]]
  });
  return pattern;
};
var styleRules = (props) => {
  return [];
};

// components/menu/index.tsx
var logic2 = (props) => {
  const currentKey = signal2();
  const select = action2((key) => {
    currentKey(() => key);
  });
  return {
    currentKey,
    select
  };
};
var layout2 = (props) => {
  const logic3 = useLogic2();
  const MenuItemFunc = useModule(menu_item_exports);
  return /* @__PURE__ */ h2("menuBox", {
    className: "inline-block border border-slate-300 p-1"
  }, props.items.map((item) => {
    const isSelected = logic3.currentKey() === item.key;
    return /* @__PURE__ */ h2("menuItem", {
      className: "block my-1",
      key: item.key,
      onClick: () => logic3.select(item.key)
    }, MenuItemFunc(__spreadProps(__spreadValues({}, item), { selected: isSelected })));
  }));
};
var designPattern2 = (props) => {
  const pattern = blockPattern;
};
var styleRules2 = (props) => {
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

// components/menu/demo.mdx
var Component = RenderToReact(menu_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Menu \u83DC\u5355"
    }), "\n", _jsx(_components.p, {
      children: "\u4E3A\u9875\u9762\u548C\u529F\u80FD\u63D0\u4F9B\u5BFC\u822A\u7684\u83DC\u5355\u5217\u8868"
    }), "\n", _jsx(Component, {
      items: [{
        label: "Menu Item One",
        key: "key1"
      }, {
        label: "Menu Item Two",
        key: "key2"
      }, {
        label: "Menu Item Three",
        key: "key3"
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
