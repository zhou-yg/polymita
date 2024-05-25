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
import { useLogic } from "@polymita/renderer";
import { jsx, jsxs } from "@polymita/renderer/jsx-runtime";
var name = "Table";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic2 = useLogic();
  const { rowKey, columns, dataSource } = props;
  return /* @__PURE__ */ jsx("tableContainer", { className: "block", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: columns.map((column) => /* @__PURE__ */ jsx("th", { className: "border-b", children: column.title }, column.title)) }) }),
    /* @__PURE__ */ jsx("tbody", { children: dataSource.map((item, index) => {
      return /* @__PURE__ */ jsx("tr", { className: "border-b", children: columns.map((column) => /* @__PURE__ */ jsx("td", { className: "border-b", children: item.render ? item.render(item[column.dataIndex]) : item[column.dataIndex] }, item[rowKey] + column.title)) }, index + item[rowKey]);
    }) })
  ] }) });
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
