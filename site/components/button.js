var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/button/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/button/index.tsx
var button_exports = {};
__export(button_exports, {
  layout: () => layout,
  logic: () => logic,
  style: () => style
});
import { h, useLayout, useLogic } from "tarat-renderer";
var logic = (props) => {
  return {
    actionType: "hover",
    disable: false,
    selected: true,
    active: true,
    count: 0
  };
};
var layout = (props) => {
  const logicResult = useLogic();
  return /* @__PURE__ */ h("buttonBox", {
    className: "block bg-slate-400"
  }, /* @__PURE__ */ h("div", {
    className: "block",
    onClick: props.onClick
  }, props.children));
};
var style = (props) => {
  const logic2 = useLogic();
  const layout2 = useLayout();
  layout2.buttonBox.div.props.style = {
    backgroundColor: logic2.count > 0 ? "red" : "blue",
    display: "inline-block"
  };
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
var RButton = RenderToReact(button_exports);
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
    }), "\n", _jsx(RButton, {
      pattern: {
        type: "primary"
      },
      children: "pattern is primary"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u7684\u6309\u94AE\u5C55\u793A"
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
  RButton,
  demo_default as default
};
