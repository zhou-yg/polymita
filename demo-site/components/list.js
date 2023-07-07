var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// components/list/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/list/index.tsx
var list_exports = {};
__export(list_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  name: () => name,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { PropTypes, useLogic } from "@polymita/renderer";
import { jsx, jsxs } from "@polymita/renderer/jsx-runtime";
var name = "List";
var meta;
var propTypes = {
  list: PropTypes.signal.isRequired
};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic2 = useLogic();
  const ds = props.list();
  return /* @__PURE__ */ jsx("listContainer", { className: "block", children: ds.map((item, index) => {
    var _a, _b, _c;
    const r = props.render(item, index);
    const key = (_c = (_b = (_a = item == null ? void 0 : item.id) != null ? _a : item == null ? void 0 : item.key) != null ? _b : item == null ? void 0 : item.name) != null ? _c : JSON.stringify(item);
    return /* @__PURE__ */ jsxs("listItem", { className: "flex p-2 border-b items-center", children: [
      /* @__PURE__ */ jsx("listContent", { className: "flex-1", children: r }),
      /* @__PURE__ */ jsx("listExtra", { className: "flex-none ml-2", children: props.extra })
    ] }, key);
  }) });
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

// components/list/demo.mdx
import { useState } from "react";
var Component = RenderToReact(list_exports);
function InputBox() {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px"
    },
    children: _jsx(Component, {
      list: [{
        name: "AAA"
      }, {
        name: "BBBBB"
      }, {
        name: "CC"
      }],
      render: (item, i) => {
        return _jsxs("div", {
          children: [i + 1, ".", item.name]
        });
      }
    })
  });
}
function InputBox2() {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px"
    },
    children: _jsx(Component, {
      list: [{
        name: "AAA"
      }, {
        name: "BBBBB"
      }, {
        name: "CC"
      }],
      extra: _jsx("div", {
        children: "extra"
      }),
      render: (item, i) => {
        return _jsxs("div", {
          children: [i + 1, ".", item.name]
        });
      }
    })
  });
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "List \u5217\u8868"
    }), "\n", _jsx(_components.p, {
      children: "\u666E\u901A\u5217\u8868"
    }), "\n", _jsx(InputBox, {}), "\n", _jsx(_components.p, {
      children: "\u5E26extra \u7684\u5217\u8868"
    }), "\n", _jsx(InputBox2, {})]
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
