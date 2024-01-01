var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name3 in all)
    __defProp(target, name3, { get: all[name3], enumerable: true });
};

// components/list/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/list/index.tsx
var list_exports = {};
__export(list_exports, {
  ItemModule: () => item_exports,
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  name: () => name2,
  propTypes: () => propTypes2,
  styleRules: () => styleRules2
});
import { PropTypes as PropTypes2, useLogic as useLogic2, classnames } from "@polymita/renderer";

// components/list/item.tsx
var item_exports = {};
__export(item_exports, {
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
var name = "ListItem";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic3 = useLogic();
  return /* @__PURE__ */ jsxs("listItemContainer", { className: "flex", children: [
    /* @__PURE__ */ jsx("listItemContent", { className: "flex-1 min-w-0", children: props.children }),
    /* @__PURE__ */ jsx("listItemExtra", { if: !!props.extra, className: "flex-none ml-2", children: props.extra })
  ] });
};
var styleRules = (props, layout3) => {
  return [];
};
var designPattern = (props, layout3) => {
  const logic3 = useLogic();
  return {};
};

// components/list/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "@polymita/renderer/jsx-runtime";
var name2 = "List";
var meta2;
var propTypes2 = {
  list: PropTypes2.signal.isRequired
};
var logic2 = (props) => {
  return {};
};
var layout2 = (props) => {
  const { border = true } = props;
  const logic3 = useLogic2();
  const ds = props.list();
  return /* @__PURE__ */ jsx2("listContainer", { className: "block", children: ds.map((item, index) => {
    var _a, _b, _c;
    const r = props.render(item, index);
    const key = (_c = (_b = (_a = item == null ? void 0 : item.id) != null ? _a : item == null ? void 0 : item.key) != null ? _b : item == null ? void 0 : item.name) != null ? _c : JSON.stringify(item);
    const cls = classnames("flex items-center mb-1", {
      "border-b": border
    });
    return /* @__PURE__ */ jsxs2("listItem", { className: cls, children: [
      /* @__PURE__ */ jsx2("listContent", { className: "flex-1 min-w-0", children: r }),
      /* @__PURE__ */ jsx2("listExtra", { if: !!props.extra, className: "flex-none ml-2", children: props.extra })
    ] }, key);
  }) });
};
var styleRules2 = (props, layout3) => {
  return [];
};
var designPattern2 = (props, layout3) => {
  const logic3 = useLogic2();
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
function InputBox2({ border }) {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px"
    },
    children: _jsx(Component, {
      border,
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
    }), "\n", _jsx(InputBox2, {}), "\n", _jsx(_components.p, {
      children: "border=false"
    }), "\n", _jsx(InputBox2, {
      border: false
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
