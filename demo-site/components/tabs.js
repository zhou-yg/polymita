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
  for (var name4 in all)
    __defProp(target, name4, { get: all[name4], enumerable: true });
};

// components/tabs/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";

// components/tabs/index.tsx
var tabs_exports = {};
__export(tabs_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  name: () => name2,
  propTypes: () => propTypes2,
  styleRules: () => styleRules2
});
import { useLogic as useLogic2, createFunctionComponent } from "@polymita/renderer";
import { signal as signal2 } from "@polymita/signal";

// components/tabs/panel.tsx
var panel_exports = {};
__export(panel_exports, {
  designPattern: () => designPattern,
  layout: () => layout,
  logic: () => logic,
  meta: () => meta,
  name: () => name,
  propTypes: () => propTypes,
  styleRules: () => styleRules
});
import { useLogic } from "@polymita/renderer";
import { jsx } from "@polymita/renderer/jsx-runtime";
var name = "TabPanel";
var meta;
var propTypes = {};
var logic = (props) => {
  return {};
};
var layout = (props) => {
  const logic4 = useLogic();
  const { children } = props;
  return /* @__PURE__ */ jsx("tabPanelContainer", {});
};
var styleRules = (props, layout4) => {
  return [];
};
var designPattern = (props, layout4) => {
  const logic4 = useLogic();
  return {};
};

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

// components/tabs/index.tsx
import { jsx as jsx2, jsxs } from "@polymita/renderer/jsx-runtime";
var name2 = "Tabs";
var meta2;
var propTypes2 = {};
var logic2 = (props) => {
  var _a, _b, _c, _d;
  const activeTab = signal2(
    props.defaultActiveTab || ((_a = props.tabs) == null ? void 0 : _a[0]) || ((_d = (_c = (_b = props.panels) == null ? void 0 : _b[0]) == null ? void 0 : _c.props) == null ? void 0 : _d.header)
  );
  return {
    activeTab
  };
};
var TabPanel = createFunctionComponent(panel_exports);
var layout2 = (props) => {
  const logic4 = useLogic2();
  const { children, tabs, panels } = props;
  console.log("children: ", children);
  if (children && panels) {
    throw new Error("[@polymita/tabs]: children and panels cannot be used at the same time");
  }
  const activeTab = logic4.activeTab();
  let panelNodes = children;
  if (panels) {
    panelNodes = tabs.map((tab, index) => {
      return /* @__PURE__ */ jsx2(TabPanel, { header: tab, children: panels[index] });
    });
  }
  const visiblePanelNodes = panelNodes == null ? void 0 : panelNodes.forEach((node) => {
    const isCurrent = node.props.header === activeTab;
    return __spreadProps(__spreadValues({}, node), {
      props: Object.assign({}, node.props, { if: !!isCurrent })
    });
  });
  let headers = tabs;
  if (panelNodes) {
    headers = panelNodes == null ? void 0 : panelNodes.map((node) => {
      return node.props.header;
    });
  }
  return /* @__PURE__ */ jsxs("tabsContainer", { className: "block ", children: [
    /* @__PURE__ */ jsxs("tabHeaderBars", { className: "block", children: [
      headers.map((header) => {
        const isCurrent = header === activeTab;
        const style = {
          color: isCurrent ? colors.primaries[1] : void 0,
          borderBottom: isCurrent ? `2px solid ${colors.primaries[1]}` : `2px solid transparent`
        };
        return /* @__PURE__ */ jsx2(
          "tabHeader",
          {
            className: "inline-block p-2 mr-4 cursor-pointer text-center",
            style,
            onClick: () => {
              logic4.activeTab(header);
            },
            children: header
          },
          header
        );
      }),
      /* @__PURE__ */ jsx2("tabHeaderBarLine", { className: "h-[1px] block bg-slate-200" })
    ] }),
    /* @__PURE__ */ jsx2("tabBody", { className: "block", children: visiblePanelNodes })
  ] });
};
var styleRules2 = (props, layout4) => {
  return [];
};
var designPattern2 = (props, layout4) => {
  const logic4 = useLogic2();
  return {};
};

// components/tabs/testingTabs.tsx
var testingTabs_exports = {};
__export(testingTabs_exports, {
  designPattern: () => designPattern3,
  layout: () => layout3,
  logic: () => logic3,
  meta: () => meta3,
  name: () => name3,
  propTypes: () => propTypes3,
  styleRules: () => styleRules3
});
import { useLogic as useLogic3 } from "@polymita/renderer";
import { jsx as jsx3 } from "@polymita/renderer/jsx-runtime";
var name3 = "TestingTabs";
var meta3;
var propTypes3 = {};
var logic3 = (props) => {
  return {};
};
var layout3 = (props) => {
  const logic4 = useLogic3();
  return /* @__PURE__ */ jsx3("tabsContainer", {});
};
var styleRules3 = (props, layout4) => {
  return [];
};
var designPattern3 = (props, layout4) => {
  const logic4 = useLogic3();
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
      { style: { margin: "20px", width: "50%", display: "block" } },
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

// components/tabs/demo.mdx
var Component = RenderToReactWithWrap(tabs_exports);
var TestingComponent = RenderToReactWithWrap(testingTabs_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Tabs \u6807\u7B7E"
    }), "\n", _jsx(_components.p, {
      children: "\u5934\u90E8\u6807\u7B7E"
    }), "\n", _jsx(Component, {
      tabs: ["tab1", "tab2", "tab3"]
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
  TestingComponent,
  demo_default as default
};
