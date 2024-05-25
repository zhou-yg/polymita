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

// components/menu/index.tsx
import { useLogic as useLogic2 } from "@polymita/renderer";
import { createFunctionComponent } from "@polymita/renderer";

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

// components/menu-item/index.tsx
var menu_item_exports = {};
__export(menu_item_exports, {
  designPatterns: () => designPatterns,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  styleRules: () => styleRules
});
import { ACTIVE, HOVER, useLogic } from "@polymita/renderer";
import { jsx } from "@polymita/renderer/jsx-runtime";
var meta;
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic3 = useLogic();
  return /* @__PURE__ */ jsx(
    "menuItem",
    {
      "is-container": true,
      "is-text": true,
      selected: props.selected,
      disabled: props.disabled,
      className: "block p-2 px-3 rounded-lg",
      children: /* @__PURE__ */ jsx("span", { children: props.label })
    }
  );
};
var designPatterns = (props) => {
  const logic3 = useLogic();
  return [
    [HOVER, ACTIVE, "selected", "disabled"],
    blockPatternMatrix({
      bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
      text: [colors.text, colors.light, colors.nones[0], colors.nones[1]]
    })
  ];
};
var styleRules = (props) => {
  return [];
};

// components/menu/index.tsx
import { useState } from "react";
import { jsx as jsx2, jsxs } from "@polymita/renderer/jsx-runtime";
var meta2;
var propTypes = {};
var logic2 = (props) => {
  const currentKey = props.current;
  const [items, setItems] = useState(props.items);
  const select = (item) => {
    var _a;
    const curKey = item.key;
    setItems((draft) => {
      draft.forEach((di) => {
        var _a2;
        di.selected = di.key === curKey;
        (_a2 = di.children) == null ? void 0 : _a2.forEach((dci) => {
          dci.selected = dci.key === curKey;
        });
      });
      return draft.slice();
    });
    (_a = props.onClick) == null ? void 0 : _a.call(props, item);
  };
  return {
    items,
    currentKey,
    select
  };
};
var MenuItemFunc = createFunctionComponent(menu_item_exports);
var layout2 = (props) => {
  const logic3 = useLogic2();
  return /* @__PURE__ */ jsx2("menuBox", { className: "block border-slate-300", children: /* @__PURE__ */ jsx2("ul", { className: "block", style: { margin: 0, padding: 0 }, children: logic3.items.map((item) => {
    const isSelected = item.key === logic3.currentKey;
    let element = /* @__PURE__ */ jsx2(MenuItemFunc, __spreadValues({}, __spreadProps(__spreadValues({}, item), {
      hasItemChildren: !!item.children,
      selected: isSelected,
      override: {
        layout(props2, jsonTree) {
          var _a, _b;
          if (props2.hasItemChildren) {
            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
            jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
            (_b = (_a = jsonTree.menuItem).addChild) == null ? void 0 : _b.call(_a, /* @__PURE__ */ jsx2("spanIcon", { "is-text": true, className: "mx-2", children: ">" }, "tag"));
          }
          return [];
        }
      }
    })));
    return /* @__PURE__ */ jsxs("menuItemBox", { "data-name": "menu-item-box", children: [
      /* @__PURE__ */ jsx2("div", { className: "p-1", onMouseDown: () => {
        logic3.select(item);
      }, children: element }),
      item.children && /* @__PURE__ */ jsx2("subMenuItemBox", { className: "block p-1 bg-slate-200", children: item.children.map((subItem) => {
        const isSubSelected = subItem.selected;
        return /* @__PURE__ */ jsx2("subMenuItem", { className: "block m-1", onClick: () => logic3.select(subItem), children: /* @__PURE__ */ jsx2(MenuItemFunc, __spreadProps(__spreadValues({}, subItem), { selected: isSubSelected, override: {
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
var styleRules2 = (props) => {
  return [];
};
export {
  designPattern,
  layout2 as layout,
  logic2 as logic,
  meta2 as meta,
  propTypes,
  styleRules2 as styleRules
};
