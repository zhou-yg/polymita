var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name4 in all)
    __defProp(target, name4, { get: all[name4], enumerable: true });
};

// components/form/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/form/index-test.tsx
var index_test_exports = {};
__export(index_test_exports, {
  designPattern: () => designPattern3,
  layout: () => layout4,
  logic: () => logic4,
  meta: () => meta4,
  name: () => name3,
  propTypes: () => propTypes4,
  styleRules: () => styleRules4
});
import { h as h4, useLogic as useLogic4, createComposeComponent, createFunctionComponent } from "@polymita/renderer";
import { signal as signal3 } from "@polymita/signal";

// components/form/index.tsx
var form_exports = {};
__export(form_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  name: () => name2,
  propTypes: () => propTypes2,
  styleRules: () => styleRules2
});
import { h as h2, useLogic as useLogic2 } from "@polymita/renderer";

// shared/nodes.ts
function traverseNode(node, callback) {
  var _a;
  if (Array.isArray(node)) {
    node.forEach((child) => {
      traverseNode(child, callback);
    });
  } else {
    callback(node);
    (_a = node == null ? void 0 : node.children) == null ? void 0 : _a.forEach((child) => {
      if (typeof child === "object" && "type" in child) {
        traverseNode(child, callback);
      }
    });
  }
}

// components/form-item/index.tsx
var form_item_exports = {};
__export(form_item_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  name: () => name,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { h, useLogic } from "@polymita/renderer";
var name = "FormItem";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const { name: name4, label } = props;
  return /* @__PURE__ */ h("formItemContainer", { className: "flex items-center mb-4" }, /* @__PURE__ */ h("formItemLabel", { className: "flex-none text-right mr-2", style: { width: props.labelWidth } }, label, label ? /* @__PURE__ */ h("formItemLabelColon", { className: "m-1" }, ":") : null), /* @__PURE__ */ h("formItemContent", { className: "flex-1", style: { width: props.contentWidth } }, props.children));
};
var styleRules = (props, layout5) => {
  return [];
};
var designPattern = (props, layout5) => {
  const logic5 = useLogic();
  return {};
};

// components/form/index.tsx
var name2 = "Form";
var meta2;
var propTypes2 = {};
var logic2 = (props) => {
  return {};
};
var layout2 = (props) => {
  const { form } = props;
  console.log("form: ", form);
  traverseNode(form, (node) => {
    var _a, _b;
    if (typeof node.type === "function" && node.type.name === name) {
      node.props.labelWidth = (_a = props.layout) == null ? void 0 : _a.labelWidth;
      node.props.contentWidth = (_b = props.layout) == null ? void 0 : _b.contentWidth;
    }
  });
  return /* @__PURE__ */ h2("formContainer", { className: "block" }, form);
};
var styleRules2 = (props, layout5) => {
  return [];
};
var designPattern2 = (props, layout5) => {
  const logic5 = useLogic2();
  return {};
};

// components/input/index.tsx
var input_exports = {};
__export(input_exports, {
  config: () => config,
  designPatterns: () => designPatterns,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta3,
  propTypes: () => propTypes3,
  styleRules: () => styleRules3
});
import { ACTIVE, FOCUS, h as h3, HOVER, PropTypes as PropTypes3, useLogic as useLogic3 } from "@polymita/renderer";

// patterns/control-active.ts
import { matchPatternMatrix } from "@polymita/renderer";
import { action, dispose, signal } from "@polymita/signal";

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
function strokePatternMatrix(colors2) {
  var _a, _b, _c;
  return {
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
  };
}

// components/input/index.tsx
import { after } from "@polymita/signal";
var meta3;
var propTypes3 = {
  value: PropTypes3.signal.isRequired
};
var config = () => ({});
var logic3 = (props) => {
  const value = props.value;
  after(() => {
    var _a;
    (_a = props.onInput) == null ? void 0 : _a.call(props, value());
  }, [value]);
  function onFocus() {
    var _a;
    (_a = props.onFocus) == null ? void 0 : _a.call(props);
  }
  function onBlur() {
    var _a;
    (_a = props.onBlur) == null ? void 0 : _a.call(props);
  }
  return {
    onFocus,
    onBlur,
    value
  };
};
var layout3 = (props) => {
  const logic5 = useLogic3();
  return /* @__PURE__ */ h3(
    "inputBox",
    {
      className: "block"
    },
    /* @__PURE__ */ h3(
      "input",
      {
        "is-container": true,
        "has-decoration": true,
        "is-text": true,
        className: "block w-full select-none outline-none border-0 px-2 py-1 rounded",
        autoFocus: props.focused,
        onFocus: logic5.onFocus,
        onBlur: logic5.onBlur,
        type: props.type,
        disabled: props.disabled,
        value: logic5.value
      }
    )
  );
};
var designPatterns = (props) => {
  return [
    [HOVER, ACTIVE, FOCUS, "disabled"],
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[0], colors.primaries[1]]
    })
  ];
};
var styleRules3 = (props) => {
};

// components/form/index-test.tsx
var name3 = "FormTest";
var meta4;
var propTypes4 = {};
var logic4 = (props) => {
  const name4 = signal3("");
  const password = signal3("");
  return {
    name: name4,
    password
  };
};
var FormCpt = createFunctionComponent(form_exports);
var FormItemCpt = createComposeComponent(form_item_exports);
var InputCpt = createFunctionComponent(input_exports);
var layout4 = (props) => {
  const logic5 = useLogic4();
  return /* @__PURE__ */ h4("formTestContainer", null, /* @__PURE__ */ h4("formResult", null, "name: ", logic5.name(), " ", /* @__PURE__ */ h4("br", null), "password: ", logic5.password()), /* @__PURE__ */ h4("br", null), /* @__PURE__ */ h4("br", null), /* @__PURE__ */ h4(
    FormCpt,
    {
      layout: { labelWidth: "6em" },
      form: /* @__PURE__ */ h4("div", null, /* @__PURE__ */ h4(FormItemCpt, { label: "name" }, /* @__PURE__ */ h4(InputCpt, { value: logic5.name })), /* @__PURE__ */ h4(FormItemCpt, { label: "password" }, /* @__PURE__ */ h4(InputCpt, { value: logic5.password })))
    }
  ));
};
var styleRules4 = (props, layout5) => {
  return [];
};
var designPattern3 = (props, layout5) => {
  const logic5 = useLogic4();
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
var Component = RenderToReactWithWrap(index_test_exports);
function TestCase() {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px"
    },
    children: _jsx(Component, {})
  });
}
function TestCase2() {
  const [val, setVal] = useState("v0");
  return _jsx("div", {
    style: {
      margin: "10px"
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
      children: "Form \u8868\u5355"
    }), "\n", _jsx(_components.p, {
      children: "\u666E\u901A Form Input \u8868\u5355"
    }), "\n", _jsx(TestCase, {})]
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
  TestCase,
  TestCase2,
  demo_default as default
};
