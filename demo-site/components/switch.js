var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/switch/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";

// components/switch/index.tsx
var switch_exports = {};
__export(switch_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import {
  PropTypes,
  useLogic,
  ACTIVE,
  HOVER
} from "@polymita/renderer";
import { get, set, signal as signal2 } from "@polymita/signal";

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

// components/switch/index.tsx
import { jsx, jsxs } from "@polymita/renderer/jsx-runtime";
var meta;
var propTypes = {
  value: PropTypes.signal.isRequired.default(() => signal2(false))
};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic2 = useLogic();
  const value = props.value();
  const valuePath = props["value-path"];
  return /* @__PURE__ */ jsxs(
    "switchContainer",
    {
      "is-container": true,
      className: "inline-block relative overflow-hidden",
      style: { minWidth: "44px", height: "22px", lineHeight: "22px", borderRadius: "11px" },
      onClick: () => {
        props.value((draft) => {
          const oldValue = get(draft, valuePath);
          const newValue = !oldValue;
          if (valuePath) {
            set(draft, valuePath, newValue);
          } else {
            return newValue;
          }
        });
      },
      children: [
        /* @__PURE__ */ jsx(
          "switchHandle",
          {
            "is-fillText": true,
            style: { width: "18px", height: "18px", top: "2px", insetInlineStart: "2px" },
            className: "rounded-full absolute"
          }
        ),
        /* @__PURE__ */ jsxs("contentBox", { className: "block h-full pointer-events-none", children: [
          /* @__PURE__ */ jsx(
            "checkedContent",
            {
              className: "block h-full",
              style: {
                marginInlineStart: "9px",
                marginInlineEnd: "24px"
              },
              "is-text": true,
              children: props.checkedContent
            }
          ),
          /* @__PURE__ */ jsx(
            "uncheckedContent",
            {
              className: "block h-full",
              style: {
                marginTop: "-22px",
                marginInlineStart: "24px",
                marginInlineEnd: "9px"
              },
              "is-text": true,
              children: props.uncheckedContent
            }
          )
        ] })
      ]
    }
  );
};
var styleRules = (props, layout2) => {
  return [
    {
      target: layout2.switchContainer.switchHandle,
      condition: props.value(),
      style: {
        insetInlineStart: `calc(100% - 20px)`
      }
    },
    {
      target: layout2.switchContainer.contentBox.uncheckedContent,
      condition: props.value(),
      style: {
        visibility: "hidden"
      }
    },
    {
      target: layout2.switchContainer.contentBox.checkedContent,
      condition: !props.value(),
      style: {
        visibility: "hidden"
      }
    }
  ];
};
var designPatterns = (props, layout2) => {
  const logic2 = useLogic();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  return [
    entry,
    blockPatternMatrix(
      props.value() ? {
        bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
        text: [colors.light]
      } : {
        bg: [colors.grays[1], colors.grays[0], colors.grays[2]],
        text: [colors.light]
      }
    )
  ];
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

// components/switch/demo.mdx
var Component = RenderToReactWithWrap(switch_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Switch \u5F00\u5173"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u7528\u6CD5"
    }), "\n", _jsx(Component, {
      id: "switch"
    }), "\n", _jsx(_components.p, {
      children: "\u9644\u5E26\u5185\u5BB9"
    }), "\n", _jsx(Component, {
      id: "switch",
      checkedContent: "OK",
      uncheckedContent: "Not Good"
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
