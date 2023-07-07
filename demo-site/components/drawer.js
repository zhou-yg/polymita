var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// components/drawer/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

// components/drawer/index.tsx
var drawer_exports = {};
__export(drawer_exports, {
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
var name = "Drawer";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const { title, width = 600, children } = props;
  const logic3 = useLogic();
  return /* @__PURE__ */ jsxs("drawerContainer", { className: "block fixed top-0 right-0 h-full", style: { width: `${width}px` }, children: [
    /* @__PURE__ */ jsx("drawerHeader", { className: "flex items-center p-4 border-bottom", children: title }),
    /* @__PURE__ */ jsx("drawerBody", { className: "overflow-auto", children })
  ] });
};
var styleRules = (props, layout3) => {
  return [];
};
var designPattern = (props, layout3) => {
  const logic3 = useLogic();
  return {};
};

// components/Button/index.tsx
var Button_exports = {};
__export(Button_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  styleRules: () => styleRules2
});
import {
  ACTIVE,
  HOVER,
  useLayout,
  useLogic as useLogic2
} from "@polymita/renderer";

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

// components/Button/index.tsx
import { jsx as jsx2 } from "@polymita/renderer/jsx-runtime";
var meta2;
var logic2 = (props) => {
  return {
    count: 0
  };
};
var layout2 = (props) => {
  const logicResult = useLogic2();
  return /* @__PURE__ */ jsx2(
    "buttonBox",
    {
      className: "inline-block px-2 py-1 rounded hover:cursor-pointer",
      "is-container": true,
      "has-decoration": true,
      "is-text": true,
      selected: false,
      disabled: props.disabled,
      onClick: (e) => {
        var _a;
        if (props.disabled)
          return;
        (_a = props.onClick) == null ? void 0 : _a.call(props, e);
      },
      children: /* @__PURE__ */ jsx2(
        "span",
        {
          className: "block select-none",
          children: props.children
        }
      )
    }
  );
};
var designPatterns = (props) => {
  const logicResult = useLogic2();
  const entry = [HOVER, ACTIVE, "selected", "disabled"];
  switch (props.type) {
    case "primary":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light]
        })
      ];
    case "text":
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text]
        })
      ];
      break;
    case "link":
      return [
        entry,
        strokePatternMatrix({
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]]
        })
      ];
      break;
    default:
      return [
        entry,
        strokePatternMatrix({
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]]
        })
      ];
      break;
  }
};
var styleRules2 = (props, draft) => {
  const logic3 = useLogic2();
  const layout3 = useLayout();
  return [];
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

// components/drawer/demo.mdx
import { useState } from "react";
var Component = RenderToReactWithWrap(drawer_exports);
var ButtonComponent = RenderToReactWithWrap(Button_exports);
function Box() {
  const [show, setShow] = useState(false);
  return _jsxs("div", {
    children: [_jsx(ButtonComponent, {
      onClick: () => setShow((v) => !v),
      children: "show modal"
    }), show ? _jsxs(Component, {
      title: "My Drawer",
      onClose: (v) => setShow(false),
      children: [_jsx("p", {
        children: " i am content row 1 "
      }), _jsx("p", {
        children: " i am content row 2 "
      })]
    }) : ""]
  });
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Drawer \u62BD\u5C49"
    }), "\n", _jsx(_components.p, {
      children: "\u5B8C\u5168\u53D7\u63A7"
    }), "\n", _jsx(Box, {})]
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
  Box,
  ButtonComponent,
  Component,
  demo_default as default
};
