var __defProp = Object.defineProperty;
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
import { useModule } from "tarat-renderer";
import { h as h2 } from "tarat-renderer";

// patterns/control-active.tsx
import { matchPatternMatrix } from "tarat-renderer";

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
  none: "#fff",
  text: "#434343"
};

// patterns/control-active.tsx
function blockPattern(arg, colors2) {
  return matchPatternMatrix(
    [arg.hover(), arg.active(), arg.selected, arg.disabled]
  )({
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", "*", false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        "not-allowed": ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text]: [],
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
import { h } from "tarat-renderer";
var logic = (props) => {
  return {};
};
var layout = (props) => {
  return /* @__PURE__ */ h("menuItem", {
    "is-container": true,
    className: "block p-2"
  }, /* @__PURE__ */ h("span", {
    "is-text": true
  }, props.label));
};
var designPattern = (props) => {
  const pattern = blockPattern;
};
var styleRules = (props) => {
  return [];
};

// components/menu/index.tsx
var logic2 = (props) => {
  return {};
};
var layout2 = (props) => {
  const MenuItemFunc = useModule(menu_item_exports);
  return /* @__PURE__ */ h2("menuBox", {
    className: "inline-block border border-slate-300 p-2"
  }, props.items.map((item) => {
    return /* @__PURE__ */ h2("menuItem", {
      key: item.key
    }, MenuItemFunc(item));
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
