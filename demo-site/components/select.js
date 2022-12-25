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
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// components/select/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";

// components/select/index.tsx
var select_exports = {};
__export(select_exports, {
  designPattern: () => designPattern4,
  layout: () => layout4,
  logic: () => logic4,
  meta: () => meta4,
  propTypes: () => propTypes3,
  styleRules: () => styleRules4
});
import { h as h4, useLogic as useLogic4, useModule as useModule2, PropTypes as PropTypes3, useComponentModule } from "tarat-renderer";
import { signal as signal4 } from "atomic-signal";

// components/input/index.tsx
var input_exports = {};
__export(input_exports, {
  config: () => config,
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { h, PropTypes, useLogic } from "tarat-renderer";

// patterns/control-active.ts
import { matchPatternMatrix } from "tarat-renderer";
import { action, dispose, signal } from "atomic-signal";

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
function useInteractive(props) {
  const hover = signal(false);
  const active = signal(false);
  const focus = signal(false);
  const mouseEnter = action(() => {
    if (props.disabled)
      return;
    hover(() => true);
  });
  const mouseLeave = action(() => {
    if (props.disabled)
      return;
    hover(() => false);
  });
  const mouseDown = action(() => {
    if (props.disabled)
      return;
    active(() => true);
  });
  const mouseUp = action(() => {
    if (props.disabled)
      return;
    active(() => false);
    focus(() => true);
  });
  const focusIn = () => {
    if (props.disabled)
      return;
    focus(() => false);
  };
  document.addEventListener("mouseup", focusIn, true);
  dispose(() => {
    document.removeEventListener("mouseup", focusIn);
  });
  return {
    states: {
      hover,
      active,
      focus
    },
    events: {
      onMouseEnter: mouseEnter,
      onMouseLeave: mouseLeave,
      onMouseDown: mouseDown,
      onMouseUp: mouseUp
    }
  };
}
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
function strokePattern(arg, colors2) {
  var _a, _b, _c;
  return matchPatternMatrix([
    !!arg.hover,
    !!arg.active,
    !!arg.selected,
    !!arg.disabled
  ])({
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
  });
}

// components/input/index.tsx
import { after } from "atomic-signal";
var meta;
var propTypes = {
  value: PropTypes.signal.isRequired
};
var config = () => ({});
var logic = (props) => {
  const interactive = useInteractive({
    disabled: props.disabled
  });
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
    interactive,
    value
  };
};
var layout = (props) => {
  const logic5 = useLogic();
  return /* @__PURE__ */ h("inputBox", __spreadValues({
    className: "block"
  }, logic5.interactive.events), /* @__PURE__ */ h("input", {
    "is-container": true,
    "has-decoration": true,
    "is-text": true,
    className: "block select-none outline-none border-0 px-2 py-1 rounded",
    autoFocus: props.focused,
    onFocus: logic5.onFocus,
    onBlur: logic5.onBlur,
    type: props.type,
    disabled: props.disabled,
    value: logic5.value
  }));
};
var designPattern = (props) => {
  const logic5 = useLogic();
  const p = strokePattern(
    {
      hover: logic5.interactive.states.hover(),
      active: logic5.interactive.states.active(),
      selected: logic5.interactive.states.focus(),
      disabled: props.disabled
    },
    {
      bdw: 1,
      border: [colors.grays[0], colors.primaries[1]]
    }
  );
  return p;
};
var styleRules = (props) => {
};

// components/menu/index.tsx
var menu_exports = {};
__export(menu_exports, {
  designPattern: () => designPattern3,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta3,
  propTypes: () => propTypes2,
  styleRules: () => styleRules3
});
import { h as h3, useLogic as useLogic3, PropTypes as PropTypes2 } from "tarat-renderer";
import { after as after2, action as action3, signal as signal3 } from "atomic-signal";
import { useModule } from "tarat-renderer";

// components/menu-item/index.tsx
var menu_item_exports = {};
__export(menu_item_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  styleRules: () => styleRules2
});
import { h as h2, useLogic as useLogic2 } from "tarat-renderer";
var meta2;
var logic2 = (props) => {
  const interactive = useInteractive(props);
  return {
    interactive
  };
};
var layout2 = (props) => {
  const logic5 = useLogic2();
  return /* @__PURE__ */ h2("menuItem", __spreadValues({
    "is-container": true,
    className: "block p-2 px-3 rounded-lg"
  }, logic5.interactive.events), /* @__PURE__ */ h2("span", {
    "is-text": true
  }, props.label));
};
var designPattern2 = (props) => {
  const logic5 = useLogic2();
  const pattern = blockPattern({
    hover: logic5.interactive.states.hover(),
    active: logic5.interactive.states.active(),
    selected: !!props.selected,
    disabled: !!props.disabled
  }, {
    bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
    text: [colors.text, colors.light, colors.nones[0], colors.nones[1]]
  });
  return pattern;
};
var styleRules2 = (props) => {
  return [];
};

// components/menu/index.tsx
var meta3;
var propTypes2 = {
  items: PropTypes2.signal.isRequired
};
var logic3 = (props) => {
  const currentKey = signal3(null);
  const select = action3((item) => {
    var _a;
    const curKey = item.key;
    currentKey(() => curKey);
    (_a = props.onClick) == null ? void 0 : _a.call(props, item);
  });
  const items = props.items;
  after2(() => {
    const curKey = currentKey();
    items((draft) => {
      draft.forEach((di) => {
        var _a;
        di.selected = di.key === curKey;
        (_a = di.children) == null ? void 0 : _a.forEach((dci) => {
          dci.selected = dci.key === curKey;
        });
      });
    });
  }, [select]);
  return {
    items,
    currentKey,
    select
  };
};
var layout3 = (props) => {
  const logic5 = useLogic3();
  const MenuItemFunc = useModule(menu_item_exports);
  return /* @__PURE__ */ h3("menuBox", {
    className: "block border-slate-300"
  }, /* @__PURE__ */ h3("ul", {
    className: "block"
  }, logic5.items().map((item) => {
    const isSelected = item.selected;
    let element = MenuItemFunc(__spreadProps(__spreadValues({}, item), {
      hasItemChildren: !!item.children,
      selected: isSelected,
      override: {
        layout(props2, jsonTree) {
          var _a, _b;
          if (props2.hasItemChildren) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
            jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
            (_b = (_a = jsonTree.menuItem).insert) == null ? void 0 : _b.call(_a, /* @__PURE__ */ h3("spanIcon", {
              key: "tag",
              "is-text": true,
              className: "mx-2"
            }, ">"));
          }
          return [];
        }
      }
    }));
    return /* @__PURE__ */ h3("menuItemBox", {
      "data-name": "menu-item-box",
      key: item.key
    }, /* @__PURE__ */ h3("div", {
      className: "p-1",
      onClick: () => logic5.select(item)
    }, element), item.children && /* @__PURE__ */ h3("subMenuItemBox", {
      className: "block p-1 bg-slate-200"
    }, item.children.map((subItem) => {
      const isSubSelected = subItem.selected;
      return /* @__PURE__ */ h3("subMenuItem", {
        className: "block m-1",
        onClick: () => logic5.select(subItem)
      }, MenuItemFunc(__spreadProps(__spreadValues({}, subItem), { selected: isSubSelected, override: {
        layout(props2, jsonTree) {
          jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`;
        }
      } })));
    })));
  })));
};
var designPattern3 = (props) => {
  const pattern = blockPattern;
};
var styleRules3 = (props) => {
  return [];
};

// components/select/index.tsx
var meta4;
var propTypes3 = {
  value: PropTypes3.signal.isRequired.default(signal4(""))
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
  function selectItem(item) {
    current(item.key);
    focused(false);
  }
  return {
    optionItems,
    current,
    selectItem,
    focused
  };
};
var layout4 = (props) => {
  const {
    optionItems,
    current,
    selectItem,
    focused
  } = useLogic4();
  const Input = useModule2(input_exports);
  const Menu = useComponentModule(menu_exports);
  return /* @__PURE__ */ h4("selectContainer", {
    className: "block relative rounded"
  }, /* @__PURE__ */ h4(Input, {
    value: current,
    onFocus: () => focused(true),
    onBlur: () => focused(false)
  }), optionItems().length > 0 && focused() ? /* @__PURE__ */ h4("optionList", {
    className: "block border absolute z-10 left-0 shadow rounded p-1 w-full bg-white",
    style: { top: "40px" }
  }, /* @__PURE__ */ h4(Menu, {
    items: optionItems,
    onClick: selectItem
  })) : "");
};
var styleRules4 = (props, layout5) => {
  return [];
};
var designPattern4 = (props, layout5) => {
  const logic5 = useLogic4();
  return {};
};

// shared/render.ts
import { createRenderer } from "tarat-renderer";
import React from "react";
function RenderToReactWithWrap(module) {
  const render = RenderToReact(module);
  return (p) => {
    return React.createElement(
      "div",
      { style: { margin: "20px", display: "inline-block" } },
      render(p)
    );
  };
}
function RenderToReact(module) {
  const renderer = createRenderer(module, {
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
    children: [" \u5F53\u524D\u9009\u62E9\u503C\uFF1A", val, _jsx("br", {}), _jsx(Component, {
      value: val,
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
      disabled: true
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
