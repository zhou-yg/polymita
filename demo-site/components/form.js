var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// components/form/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/form/index.tsx
var form_exports = {};
__export(form_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  name: () => name,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { h, useLogic } from "@polymita/renderer";
var name = "Form";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic2 = useLogic();
  return /* @__PURE__ */ h("formContainer", null);
};
var styleRules = (props, layout2) => {
  return [];
};
var designPattern = (props, layout2) => {
  const logic2 = useLogic();
  return {};
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

// components/form/demo.mdx
import { useState } from "react";
var Component = RenderToReactWithWrap(form_exports);
function InputBox() {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px",
      color: "#999"
    }
  });
}
function InputBox2() {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px",
      color: "#999"
    }
  });
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Input \u8F93\u5165"
    }), "\n", _jsx(InputBox, {}), "\n", _jsx(_components.p, {
      children: "\u63A5\u6536\u7528\u6237\u8F93\u5165"
    }), "\n", _jsx(InputBox2, {}), "\n", _jsx(_components.p, {
      children: "\u6570\u5B57\u6846 type=number"
    }), "\n", _jsx(Component, {
      disabled: true,
      value: "disabled"
    }), "\n", _jsx(_components.p, {
      children: "\u4E0D\u53EF\u4EE5\u7684\u8F93\u5165\u6846"
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
  InputBox,
  InputBox2,
  demo_default as default
};
