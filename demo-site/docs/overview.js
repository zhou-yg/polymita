// docs/overview.mdx
import { jsx as _jsx } from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return _jsx(_components.h1, {
    children: "Introduce"
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var overview_default = MDXContent;
export {
  overview_default as default
};
