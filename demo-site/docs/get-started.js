// docs/get-started.mdx
import { jsx as _jsx } from "react/jsx-runtime";
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return _jsx(_components.h1, {
    children: "Get started"
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
var get_started_default = MDXContent;
export {
  get_started_default as default
};
