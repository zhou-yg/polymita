var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/radio/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/radio/index.tsx
var radio_exports = {};
__export(radio_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import { useLogic, ACTIVE, HOVER } from "@polymita/renderer";

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
import { jsx, jsxs } from "@polymita/renderer/jsx-runtime";
var meta;
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic2 = useLogic();
  return /* @__PURE__ */ jsxs(
    "radioContainer",
    {
      className: "relative flex items-center cursor-pointer",
      onClick: () => {
        var _a;
        return !props.disabled && ((_a = props.onChange) == null ? void 0 : _a.call(props, !props.selected));
      },
      children: [
        /* @__PURE__ */ jsxs(
          "radioBox",
          {
            className: "relative block mr-2 rounded-full ",
            style: { width: "16px", height: "16px" },
            "is-container": true,
            "has-decoration": true,
            selected: props.selected,
            disabled: props.disabled,
            children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  readOnly: true,
                  className: "opacity-0 absolute w-full h-full",
                  checked: props.selected,
                  "checked-path": props["checked-path"]
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "relative z-10 w-full h-full flex items-center justify-center", children: props.selected ? /* @__PURE__ */ jsx(
                "circle",
                {
                  "is-fillText": true,
                  selected: props.selected,
                  disabled: props.disabled,
                  className: "block rounded-full",
                  style: { width: "6px", height: "6px" }
                }
              ) : "" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("checkBoxLabel", { className: "select-none", children: props.children })
      ]
    }
  );
};
var styleRules = (props, layout2) => {
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

// components/radio/demo.mdx
var Component = RenderToReactWithWrap(radio_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h3: "h3"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Radio \u5355\u9009\u6846"
    }), "\n", _jsx(_components.h3, {
      children: "1.\u5B8C\u5168\u53D7\u63A7"
    }), "\n", _jsx(Component, {
      children: " \u5355\u9009\u9879 "
    }), "\n", _jsx(Component, {
      selected: true,
      children: " \u5355\u9009\u9879 "
    }), "\n", _jsx(_components.h3, {
      children: "2.\u7981\u6B62\u6837\u5F0F"
    }), "\n", _jsx(Component, {
      disabled: true,
      children: " \u5355\u9009\u9879\u7981\u6B62 "
    }), "\n", _jsx(Component, {
      disabled: true,
      selected: true,
      children: " \u5355\u9879\u9009\u9009\u4E2D "
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
