var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// components/table/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";

// components/table/index.tsx
var table_exports = {};
__export(table_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  name: () => name,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { h, useLogic } from "@polymita/renderer";
var name = "Table";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic2 = useLogic();
  const { rowKey, columns, dataSource } = props;
  return /* @__PURE__ */ h("tableContainer", { className: "block" }, /* @__PURE__ */ h("table", { className: "w-full" }, /* @__PURE__ */ h("thead", null, /* @__PURE__ */ h("tr", null, columns.map((column) => /* @__PURE__ */ h("th", { key: column.title, className: "border-b" }, column.title)))), /* @__PURE__ */ h("tbody", null, dataSource.map((item, index) => {
    return /* @__PURE__ */ h("tr", { key: index + item[rowKey], className: "border-b" }, columns.map((column) => /* @__PURE__ */ h("td", { key: item[rowKey] + column.title, className: "border-b" }, item.render ? item.render(item[column.dataIndex]) : item[column.dataIndex])));
  }))));
};
var styleRules = (props, layout2) => {
  return [];
};
var designPattern = (props, layout2) => {
  const logic2 = useLogic();
  return {};
};

// shared/render.ts
import { createRHRenderer } from "@polymita/renderer";
import React from "react";
function RenderToReactWithWrap(module) {
  const render = RenderToReact(module);
  return (p) => {
    const content = render(p);
    return React.createElement(
      "div",
      { style: { margin: "20px", width: "50%", display: "block" } },
      content
    );
  };
}
function RenderToReact(module) {
  const renderer = createRHRenderer(module, {
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

// components/table/demo.mdx
var Component = RenderToReactWithWrap(table_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Table \u8868\u683C"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u7528\u6CD5"
    }), "\n", _jsx(Component, {
      rowKey: "name",
      columns: [{
        title: "\u540D\u5B57",
        dataIndex: "name"
      }, {
        title: "\u5BC6\u7801",
        dataIndex: "password"
      }],
      dataSource: [{
        name: "jon",
        password: "123"
      }, {
        name: "josta",
        password: "33333star"
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
