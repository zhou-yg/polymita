var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name4 in all)
    __defProp(target, name4, { get: all[name4], enumerable: true });
};

// components/schema-form/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/schema-form/index-test.tsx
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
import { useLogic as useLogic4, createComposeComponent as createComposeComponent2, createFunctionComponent as createFunctionComponent2 } from "@polymita/renderer";
import { signal as signal3 } from "@polymita/signal";

// components/schema-form/index.tsx
var schema_form_exports = {};
__export(schema_form_exports, {
  designPattern: () => designPattern2,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta3,
  name: () => name2,
  propTypes: () => propTypes3,
  styleRules: () => styleRules3
});
import { useLogic as useLogic3, createFunctionComponent, createComposeComponent } from "@polymita/renderer";

// components/schema-form/form-item.tsx
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
import { useLogic } from "@polymita/renderer";
import { jsx, jsxs } from "@polymita/renderer/jsx-runtime";
var name = "FormItem";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const { name: name4, label } = props;
  return /* @__PURE__ */ jsxs("formItemContainer", { className: "flex items-center mb-4", children: [
    /* @__PURE__ */ jsxs("formItemLabel", { className: "flex-none text-right mr-2", style: { width: props.labelWidth }, children: [
      label,
      label ? /* @__PURE__ */ jsx("formItemLabelColon", { className: "m-1", children: ":" }) : null
    ] }),
    /* @__PURE__ */ jsx("formItemContent", { className: "flex-1", style: { width: props.contentWidth }, children: props.children })
  ] });
};
var styleRules = (props, layout5) => {
  return [];
};
var designPattern = (props, layout5) => {
  const logic5 = useLogic();
  return {};
};

// components/input/index.tsx
var input_exports = {};
__export(input_exports, {
  config: () => config,
  designPatterns: () => designPatterns,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  propTypes: () => propTypes2,
  styleRules: () => styleRules2
});
import { ACTIVE, FOCUS, HOVER, PropTypes as PropTypes2, useLogic as useLogic2 } from "@polymita/renderer";

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
import { jsx as jsx2 } from "@polymita/renderer/jsx-runtime";
var meta2;
var propTypes2 = {
  value: PropTypes2.signal.isRequired
};
var config = () => ({});
var logic2 = (props) => {
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
var layout2 = (props) => {
  const logic5 = useLogic2();
  return /* @__PURE__ */ jsx2(
    "inputBox",
    {
      className: "block",
      children: /* @__PURE__ */ jsx2(
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
    }
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
var styleRules2 = (props) => {
};

// components/schema-form/index.tsx
import { jsx as jsx3 } from "@polymita/renderer/jsx-runtime";
var name2 = "Form";
var meta3;
var propTypes3 = {};
var logic3 = (props) => {
  return {};
};
function generateForm(form, onChange) {
  return form.map((item, index) => {
    let targetItem = null;
    switch (item.type) {
      case "input":
      default:
        targetItem = /* @__PURE__ */ jsx3(InputCpt, { value: item.value, onInput: (v) => {
          item.name && (onChange == null ? void 0 : onChange({ [item.name]: v }));
        } });
    }
    return /* @__PURE__ */ jsx3(FormItemCpt, { label: item.label || item.name, children: targetItem }, item.name + item.label + item.type);
  });
}
var FormItemCpt = createComposeComponent(form_item_exports);
var InputCpt = createFunctionComponent(input_exports);
var layout3 = (props) => {
  const { form } = props;
  const targetForm = form ? generateForm(form, props.onChange) : "";
  return /* @__PURE__ */ jsx3("formContainer", { className: "block", children: targetForm });
};
var styleRules3 = (props, layout5) => {
  return [];
};
var designPattern2 = (props, layout5) => {
  const logic5 = useLogic3();
  return {};
};

// components/schema-form/index-test.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "@polymita/renderer/jsx-runtime";
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
var FormCpt = createFunctionComponent2(schema_form_exports);
var FormItemCpt2 = createComposeComponent2(form_item_exports);
var InputCpt2 = createFunctionComponent2(input_exports);
var layout4 = (props) => {
  const logic5 = useLogic4();
  return /* @__PURE__ */ jsxs2("formTestContainer", { children: [
    /* @__PURE__ */ jsxs2("formResult", { children: [
      "name: ",
      logic5.name(),
      " ",
      /* @__PURE__ */ jsx4("br", {}),
      "password: ",
      logic5.password()
    ] }),
    /* @__PURE__ */ jsx4("br", {}),
    /* @__PURE__ */ jsx4("br", {}),
    /* @__PURE__ */ jsx4(
      FormCpt,
      {
        layout: { labelWidth: "6em" },
        form: [
          {
            label: "name",
            value: logic5.name
          },
          {
            label: "password",
            value: logic5.password
          }
        ]
      }
    )
  ] });
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

// components/schema-form/demo.mdx
import { useState } from "react";
var Component = RenderToReactWithWrap(index_test_exports);
var FormComponent = RenderToReactWithWrap(schema_form_exports);
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
  const [values, setValues] = useState({
    first: "",
    second: ""
  });
  return _jsxs("div", {
    style: {
      margin: "10px"
    },
    children: [_jsx("div", {
      children: JSON.stringify(values)
    }), _jsx(FormComponent, {
      onChange: (v) => {
        console.log("v:", v);
        setValues((pre) => Object.assign({}, pre, v));
      },
      form: [{
        name: "first",
        value: values.first
      }, {
        name: "second",
        value: values.second
      }]
    })]
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
    }), "\n", _jsx(TestCase, {}), "\n", _jsx(_components.p, {
      children: "\u5355\u72EC\u4F7F\u7528 Form \u7EC4\u4EF6"
    }), "\n", _jsx(TestCase2, {})]
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
  FormComponent,
  TestCase,
  TestCase2,
  demo_default as default
};
