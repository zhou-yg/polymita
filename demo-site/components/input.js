var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/input/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/input/index.tsx
var input_exports = {};
__export(input_exports, {
  config: () => config,
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { ACTIVE, FOCUS, HOVER, PropTypes, useLogic } from "@polymita/renderer";

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
import { jsx } from "@polymita/renderer/jsx-runtime";
var meta;
var propTypes = {
  value: PropTypes.signal.isRequired
};
var config = () => ({});
var logic = (props) => {
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
var layout = (props) => {
  const logic2 = useLogic();
  return /* @__PURE__ */ jsx(
    "inputBox",
    {
      className: "block",
      children: /* @__PURE__ */ jsx(
        "input",
        {
          placeholder: props.placeholder,
          "is-container": true,
          "has-decoration": true,
          "is-text": true,
          className: "block w-full select-none outline-none border-0 px-2 py-1 rounded",
          autoFocus: props.focused,
          onFocus: logic2.onFocus,
          onBlur: logic2.onBlur,
          type: props.type,
          disabled: props.disabled,
          value: logic2.value,
          "value-path": props["value-path"]
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
var styleRules = (props) => {
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

// components/input/demo.mdx
import { useState } from "react";
var Component = RenderToReactWithWrap(input_exports);
function InputBox() {
  const [val, setVal] = useState("v0");
  return _jsxs("div", {
    style: {
      margin: "10px",
      color: "#999"
    },
    children: ["\u5F53\u524D\u503C: ", val, _jsx("br", {}), _jsx(Component, {
      value: val,
      onInput: (v) => setVal(v),
      onFocus: () => console.log("focus 1"),
      onBlur: () => console.log("blur 1")
    })]
  });
}
function InputBox2() {
  const [val, setVal] = useState("v0");
  return _jsxs("div", {
    style: {
      margin: "10px",
      color: "#999"
    },
    children: ["\u5F53\u524D\u503C: ", val, _jsx("br", {}), "focused: true", _jsx("br", {}), _jsx(Component, {
      type: "number",
      value: val,
      onInput: (v) => setVal(v),
      focused: true
    })]
  });
}
function InputBoxWithPath() {
  const [val, setVal] = useState({
    payload: {
      name: "name"
    }
  });
  return _jsxs("div", {
    style: {
      margin: "10px",
      color: "#999"
    },
    children: ['\u5F53\u524D\u503C val.payload.name = "', val.payload.name, '"', _jsx("br", {}), _jsx(Component, {
      "value-path": ["payload", "name"],
      value: val,
      onInput: (v) => {
        console.log("v: ", v);
        setVal(v);
      }
    })]
  });
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h3: "h3"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Input \u8F93\u5165"
    }), "\n", _jsx(_components.h3, {
      children: "1.\u63A5\u6536\u7528\u6237\u8F93\u5165"
    }), "\n", _jsx(InputBox, {}), "\n", _jsx(_components.h3, {
      children: "2.\u6570\u5B57\u6846 type=number"
    }), "\n", _jsx(InputBox2, {}), "\n", _jsx(_components.h3, {
      children: "3.\u4E0D\u53EF\u4EE5\u7684\u8F93\u5165\u6846"
    }), "\n", _jsx(Component, {
      disabled: true,
      value: "disabled"
    }), "\n", _jsx(_components.h3, {
      children: "4.\u643A\u5E26value-path\u7684\u8F93\u5165\u6846"
    }), "\n", _jsx(InputBoxWithPath, {})]
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
  InputBoxWithPath,
  demo_default as default
};
