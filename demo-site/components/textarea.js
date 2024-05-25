var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/textarea/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/textarea/index.tsx
var textarea_exports = {};
__export(textarea_exports, {
  config: () => config,
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { ACTIVE, FOCUS, HOVER, useLogic } from "@polymita/renderer";

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

// components/textarea/index.tsx
import { useEffect, useState } from "react";
import { jsx } from "@polymita/renderer/jsx-runtime";
var meta;
var propTypes = {};
var config = () => ({});
var logic = (props) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
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
    value,
    setValue
  };
};
var layout = (props) => {
  const logic2 = useLogic();
  return /* @__PURE__ */ jsx(
    "inputBox",
    {
      className: "block",
      children: /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: props.placeholder,
          "is-container": true,
          "has-decoration": true,
          "is-text": true,
          className: "block w-full select-none outline-none border-0 px-2 py-1 rounded",
          onFocus: logic2.onFocus,
          onBlur: logic2.onBlur,
          rows: props.rows,
          disabled: props.disabled,
          value: logic2.value,
          onChange: (e) => {
            logic2.setValue(e.target.value);
          },
          children: logic2.value
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

// components/textarea/demo.mdx
import { useState as useState2 } from "react";
var Component = RenderToReactWithWrap(textarea_exports);
function InputBox() {
  const [val, setVal] = useState2("v0");
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
  const [val, setVal] = useState2("v0");
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
