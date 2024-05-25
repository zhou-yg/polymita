var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name4 in all)
    __defProp(target, name4, { get: all[name4], enumerable: true });
};

// components/tabs/demo.mdx
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState as useState2 } from "react";

// components/tabs/index.tsx
var tabs_exports = {};
__export(tabs_exports, {
  designPattern: () => designPattern2,
  layout: () => layout2,
  logic: () => logic2,
  meta: () => meta2,
  name: () => name2,
  panelModule: () => panelModule,
  propTypes: () => propTypes2,
  styleRules: () => styleRules2
});
import { useLogic as useLogic2, createFunctionComponent } from "@polymita/renderer";

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
  return /* @__PURE__ */ jsx("tabPanelContainer", { className: "block", children });
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
import { useState } from "react";
import { jsx as jsx2, jsxs } from "@polymita/renderer/jsx-runtime";
var name2 = "Tabs";
var meta2;
var propTypes2 = {};
var logic2 = (props) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [activeTab, setActiveTab] = useState(
    props.defaultActiveTab || ((_a = props.tabs) == null ? void 0 : _a[0]) || ((_d = (_c = (_b = props.panels) == null ? void 0 : _b[0]) == null ? void 0 : _c.props) == null ? void 0 : _d.header) || ((_g = (_f = (_e = props.children) == null ? void 0 : _e[0]) == null ? void 0 : _f.props) == null ? void 0 : _g.header)
  );
  return {
    activeTab,
    setActiveTab
  };
};
var TabPanel = createFunctionComponent(panel_exports);
var panelModule = panel_exports;
var layout2 = (props) => {
  const logic4 = useLogic2();
  const { children, tabs, panels } = props;
  console.log("children: ", children);
  if (children && panels) {
    throw new Error("[@polymita/tabs]: children and panels cannot be used at the same time");
  }
  const activeTab = logic4.activeTab;
  let panelNodes = children;
  if (panels) {
    panelNodes = tabs.map((tab, index) => {
      return /* @__PURE__ */ jsx2(TabPanel, { header: tab, children: panels[index] });
    });
  }
  const visiblePanelNodes = panelNodes == null ? void 0 : panelNodes.map((node) => {
    const isCurrent = node.props.header === activeTab;
    return {
      node,
      visible: isCurrent
    };
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
              logic4.setActiveTab(header);
            },
            children: header
          },
          header
        );
      }),
      /* @__PURE__ */ jsx2("tabHeaderBarLine", { className: "h-[1px] block bg-slate-200" })
    ] }),
    /* @__PURE__ */ jsx2("tabBody", { className: "block", children: visiblePanelNodes == null ? void 0 : visiblePanelNodes.map((item) => {
      return /* @__PURE__ */ jsx2("tabBodyItem", { if: item.visible, className: "block", children: item.node });
    }) })
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
import { useLogic as useLogic3, createFunctionComponent as createFunctionComponent2 } from "@polymita/renderer";
import { jsx as jsx3, jsxs as jsxs2 } from "@polymita/renderer/jsx-runtime";
var name3 = "TestingTabs";
var meta3;
var propTypes3 = {};
var logic3 = (props) => {
  return {};
};
var Tabs = createFunctionComponent2(tabs_exports);
var TabPanel2 = createFunctionComponent2(panel_exports);
var layout3 = (props) => {
  const logic4 = useLogic3();
  return /* @__PURE__ */ jsx3("tabsContainer", { children: /* @__PURE__ */ jsxs2(Tabs, { children: [
    /* @__PURE__ */ jsx3(TabPanel2, { header: "tab1", children: "\u5185\u5BB91" }),
    /* @__PURE__ */ jsx3(TabPanel2, { header: "tab2", children: "\u5185\u5BB92" })
  ] }) });
};
var styleRules3 = (props, layout4) => {
  return [];
};
var designPattern3 = (props, layout4) => {
  const logic4 = useLogic3();
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

// components/tabs/demo.mdx
var Component = RenderToReactWithWrap(tabs_exports);
var TestingComponent = RenderToReactWithWrap(testingTabs_exports);
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    strong: "strong",
    bold: "bold",
    del: "del"
  }, props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.h1, {
      children: "Tabs \u6807\u7B7E"
    }), "\n", _jsx(_components.p, {
      children: "\u5934\u90E8\u6807\u7B7E"
    }), "\n", _jsx(Component, {
      tabs: ["tab1", "tab2", "tab3"]
    }), "\n", _jsx(_components.p, {
      children: "\u5934\u90E8props\u5185\u5BB9"
    }), "\n", _jsx(Component, {
      tabs: ["tab1", "tab2", "tab3"],
      panels: [_jsx(_components.strong, {
        children: "strong"
      }), _jsx(_components.bold, {
        children: "strong"
      }), _jsx(_components.del, {
        children: "strong"
      })]
    }), "\n", _jsx(_components.p, {
      children: "tabs\u5185\u5BB9"
    }), "\n", _jsx(TestingComponent, {})]
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
