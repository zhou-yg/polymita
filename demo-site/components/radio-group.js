var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/radio-group/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";

// components/radio-group/index.tsx
var radio_group_exports = {};
__export(radio_group_exports, {
  designPattern: () => designPattern,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  propTypes: () => propTypes,
  styleRules: () => styleRules2
});
import { h as h2, useLogic as useLogic2, createFunctionComponent } from "@polymita/renderer";

// components/radio/index.tsx
var radio_exports = {};
__export(radio_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import { h, useLogic, ACTIVE, HOVER } from "@polymita/renderer";

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
function blockPatternMatrix(colors2) {
  return {
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", false, false],
        [colors2.bg[2]]: ["*", true, "*", false],
        [colors2.bg[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      },
      cursor: {
        pointer: [],
        "not-allowed": ["*", "*", "*", true]
      },
      userSelect: {
        none: []
      },
      border: {
        [`solid 1px ${colors.disables[0]}`]: ["*", "*", "*", true]
      }
    },
    text: {
      color: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[0]]: ["*", "*", "*", true]
      }
    },
    fillText: {
      backgroundColor: {
        [colors2.text[0]]: [],
        [colors2.text[1]]: [true, false, "*", false],
        [colors2.text[2]]: [false, true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  };
}
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

// components/radio/index.tsx
var meta;
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic3 = useLogic();
  return /* @__PURE__ */ h(
    "radioContainer",
    {
      className: "relative flex items-center cursor-pointer",
      onClick: () => {
        var _a;
        return !props.disabled && ((_a = props.onChange) == null ? void 0 : _a.call(props, !props.selected));
      }
    },
    /* @__PURE__ */ h(
      "radioBox",
      {
        className: "relative block mr-2 rounded-full ",
        style: { width: "16px", height: "16px" },
        "is-container": true,
        "has-decoration": true,
        selected: props.selected,
        disabled: props.disabled
      },
      /* @__PURE__ */ h(
        "input",
        {
          type: "checkbox",
          readOnly: true,
          className: "opacity-0 absolute w-full h-full",
          checked: props.selected,
          "checked-path": props["checked-path"]
        }
      ),
      /* @__PURE__ */ h("span", { className: "relative z-10 w-full h-full flex items-center justify-center" }, props.selected ? /* @__PURE__ */ h(
        "circle",
        {
          "is-fillText": true,
          selected: props.selected,
          disabled: props.disabled,
          className: "block rounded-full",
          style: { width: "6px", height: "6px" }
        }
      ) : "")
    ),
    /* @__PURE__ */ h("checkBoxLabel", { className: "select-none" }, props.children)
  );
};
var styleRules = (props, layout3) => {
  return [];
};
var designPatterns = (props) => {
  const logicResult = useLogic();
  const arr = [HOVER, ACTIVE, "selected", "disabled"];
  if (props.selected) {
    return [
      arr,
      blockPatternMatrix(
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2], colors.primaries[0]],
          text: [colors.light, colors.light, colors.light, colors.light]
        }
      )
    ];
  }
  return [
    arr,
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
      text: [colors.text, colors.primaries[1], colors.primaries[2]]
    })
  ];
};

// components/radio-group/index.tsx
var meta2;
var propTypes = {};
var logic2 = (props) => {
  return {};
};
var Radio = createFunctionComponent(radio_exports);
var layout2 = (props) => {
  const logic3 = useLogic2();
  const currentValue = props.value;
  return /* @__PURE__ */ h2("radioGroupContainer", null, props.options.map((option, index) => {
    return /* @__PURE__ */ h2(
      Radio,
      {
        key: option.label,
        selected: currentValue === option.value,
        onChange: () => {
          props.onChange(option.value);
        }
      },
      option.label
    );
  }));
};
var styleRules2 = (props, layout3) => {
  return [];
};
var designPattern = (props, layout3) => {
  const logic3 = useLogic2();
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

// components/radio-group/demo.mdx
var Component = RenderToReactWithWrap(radio_group_exports);
function ComponentBox() {
  const [val, setVal] = useState("A");
  return _jsxs("div", {
    style: {
      margin: "10px"
    },
    children: ["\u5F53\u524D\u9009\u62E9\u503C\uFF1A", val, _jsx("br", {}), _jsx(Component, {
      name: "char",
      onChange: (v) => setVal(v),
      value: val,
      options: [{
        label: "A",
        value: "A"
      }, {
        label: "B",
        value: "B"
      }, {
        label: "C",
        value: "C"
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
      children: "RadioGroup \u5355\u9009\u6846\u7EC4"
    }), "\n", _jsx(_components.p, {
      children: "\u591A\u4E2A\u9009\u9879"
    }), "\n", _jsx(ComponentBox, {})]
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
  ComponentBox,
  demo_default as default
};
