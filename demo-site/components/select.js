var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};

// components/select/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";

// components/select/index.tsx
var select_exports = {};
__export(select_exports, {
  designPattern: () => designPattern2,
  layout: () => layout4,
  logic: () => logic4,
  meta: () => meta4,
  name: () => name,
  propTypes: () => propTypes3,
  styleRules: () => styleRules4
});
import { useLogic as useLogic4, PropTypes as PropTypes3, createFunctionComponent as createFunctionComponent2 } from "@polymita/renderer";
import { action as action4, after as after3, signal as signal4 } from "@polymita/signal";

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
function blockPattern(arg, colors2) {
  return matchPatternMatrix([
    !!arg.hover,
    !!arg.active,
    !!arg.selected,
    !!arg.disabled
  ])({
    container: {
      backgroundColor: {
        [colors2.bg[0]]: [],
        [colors2.bg[1]]: [true, "*", "*", false],
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
        [colors2.text[1]]: [true, "*", "*", false],
        [colors2.text[2]]: ["*", true, "*", false],
        [colors2.text[3]]: ["*", "*", true, false],
        [colors.disables[1]]: ["*", "*", "*", true]
      }
    }
  });
}
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
  const logic5 = useLogic();
  return /* @__PURE__ */ jsx(
    "inputBox",
    {
      className: "block",
      children: /* @__PURE__ */ jsx(
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
var styleRules = (props) => {
};

// components/menu/index.tsx
var menu_exports = {};
__export(menu_exports, {
  designPattern: () => designPattern,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta3,
  propTypes: () => propTypes2,
  styleRules: () => styleRules3
});
import { useLogic as useLogic3, PropTypes as PropTypes2 } from "@polymita/renderer";
import { signal as signal3 } from "@polymita/signal";
import { createFunctionComponent } from "@polymita/renderer";

// components/menu-item/index.tsx
var menu_item_exports = {};
__export(menu_item_exports, {
  designPatterns: () => designPatterns2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  styleRules: () => styleRules2
});
import { ACTIVE as ACTIVE2, HOVER as HOVER2, useLogic as useLogic2 } from "@polymita/renderer";
import { jsx as jsx2 } from "@polymita/renderer/jsx-runtime";
var meta2;
var logic2 = (props) => {
  return {};
};
var layout2 = (props) => {
  const logic5 = useLogic2();
  return /* @__PURE__ */ jsx2(
    "menuItem",
    {
      "is-container": true,
      "is-text": true,
      selected: props.selected,
      disabled: props.disabled,
      className: "block p-2 px-3 rounded-lg",
      children: /* @__PURE__ */ jsx2("span", { children: props.label })
    }
  );
};
var designPatterns2 = (props) => {
  const logic5 = useLogic2();
  return [
    [HOVER2, ACTIVE2, "selected", "disabled"],
    blockPatternMatrix({
      bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
      text: [colors.text, colors.light, colors.nones[0], colors.nones[1]]
    })
  ];
};
var styleRules2 = (props) => {
  return [];
};

// components/menu/index.tsx
import { jsx as jsx3, jsxs } from "@polymita/renderer/jsx-runtime";
var meta3;
var propTypes2 = {
  current: PropTypes2.signal.isRequired.default(() => signal3("")),
  items: PropTypes2.signal.isRequired
};
var logic3 = (props) => {
  const currentKey = props.current;
  const select = (item) => {
    var _a;
    const curKey = item.key;
    currentKey(() => curKey);
    items((draft) => {
      draft.forEach((di) => {
        var _a2;
        di.selected = di.key === curKey;
        (_a2 = di.children) == null ? void 0 : _a2.forEach((dci) => {
          dci.selected = dci.key === curKey;
        });
      });
    });
    (_a = props.onClick) == null ? void 0 : _a.call(props, item);
  };
  const items = props.items;
  return {
    items,
    currentKey,
    select
  };
};
var MenuItemFunc = createFunctionComponent(menu_item_exports);
var layout3 = (props) => {
  const logic5 = useLogic3();
  return /* @__PURE__ */ jsx3("menuBox", { className: "block border-slate-300", children: /* @__PURE__ */ jsx3("ul", { className: "block", children: logic5.items().map((item) => {
    const isSelected = item.selected;
    let element = /* @__PURE__ */ jsx3(MenuItemFunc, __spreadValues({}, __spreadProps(__spreadValues({}, item), {
      hasItemChildren: !!item.children,
      selected: isSelected,
      override: {
        layout(props2, jsonTree) {
          var _a, _b;
          if (props2.hasItemChildren) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
            jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
            (_b = (_a = jsonTree.menuItem).insert) == null ? void 0 : _b.call(_a, /* @__PURE__ */ jsx3("spanIcon", { "is-text": true, className: "mx-2", children: ">" }, "tag"));
          }
          return [];
        }
      }
    })));
    return /* @__PURE__ */ jsxs("menuItemBox", { "data-name": "menu-item-box", children: [
      /* @__PURE__ */ jsx3("div", { className: "p-1", onMouseDown: () => {
        logic5.select(item);
      }, children: element }),
      item.children && /* @__PURE__ */ jsx3("subMenuItemBox", { className: "block p-1 bg-slate-200", children: item.children.map((subItem) => {
        const isSubSelected = subItem.selected;
        return /* @__PURE__ */ jsx3("subMenuItem", { className: "block m-1", onClick: () => logic5.select(subItem), children: /* @__PURE__ */ jsx3(MenuItemFunc, __spreadProps(__spreadValues({}, subItem), { selected: isSubSelected, override: {
          layout(props2, jsonTree) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`;
          }
        } })) });
      }) })
    ] }, item.key);
  }) }) });
};
var designPattern = (props) => {
  const pattern = blockPattern;
};
var styleRules3 = (props) => {
  return [];
};

// components/select/index.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "@polymita/renderer/jsx-runtime";
var name = "Select";
var meta4;
var propTypes3 = {
  value: PropTypes3.signal.isRequired.default(() => signal4(""))
};
var logic4 = (props) => {
  const current = props.value;
  const focused = signal4(false);
  const optionItems = signal4((props.options || []).map((option) => {
    return {
      label: option.label,
      key: option.value,
      selected: current() === option.value
    };
  }));
  const selectItem = action4(function(item) {
    var _a;
    current(() => item.key);
    focused(() => false);
    (_a = props.onChange) == null ? void 0 : _a.call(props, item.key);
  });
  after3(() => {
  }, [current]);
  return {
    optionItems,
    current,
    selectItem,
    focused
  };
};
var Input = createFunctionComponent2(input_exports);
var Menu = createFunctionComponent2(menu_exports);
var layout4 = (props) => {
  const {
    optionItems,
    current,
    selectItem,
    focused
  } = useLogic4();
  return /* @__PURE__ */ jsxs2(
    "selectContainer",
    {
      className: "block relative rounded",
      children: [
        /* @__PURE__ */ jsx4(
          Input,
          {
            disabled: props.disabled,
            value: current,
            onFocus: () => focused(true),
            onBlur: () => focused(false)
          }
        ),
        /* @__PURE__ */ jsx4(
          "optionList",
          {
            if: optionItems().length > 0 && focused(),
            className: "block border absolute z-10 left-0 shadow rounded p-1 w-full bg-white",
            style: { top: "40px" },
            children: /* @__PURE__ */ jsx4(Menu, { current, items: optionItems, onClick: selectItem })
          }
        )
      ]
    }
  );
};
var styleRules4 = (props, layout5) => {
  layout5.selectContainer.Input.inputBox.input;
  return [];
};
var designPattern2 = (props, layout5) => {
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

// components/select/demo.mdx
var Component = RenderToReactWithWrap(select_exports);
function SelectBox1() {
  const [val, setVal] = useState("A");
  return _jsxs("div", {
    style: {
      margin: "10px"
    },
    children: ["\u5F53\u524D\u9009\u62E9\u503C\uFF1A", val, _jsx("br", {}), _jsx(Component, {
      value: val,
      onChange: (v) => setVal(v),
      options: [{
        value: "A",
        label: "A"
      }, {
        value: "B",
        label: "B"
      }, {
        value: "C",
        label: "C"
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
      children: "Select \u4E0B\u62C9\u9009\u62E9\u5668"
    }), "\n", _jsx(_components.p, {
      children: "\u57FA\u672C\u4F7F\u7528"
    }), "\n", _jsx(SelectBox1, {}), "\n", _jsx(_components.p, {
      children: "\u7981\u6B62\u6837\u5F0F"
    }), "\n", _jsx(Component, {
      disabled: true,
      value: "Disable Select"
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
  SelectBox1,
  demo_default as default
};
