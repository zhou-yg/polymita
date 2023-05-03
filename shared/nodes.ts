import { VirtualLayoutJSON, isVirtualNode } from "@polymita/renderer";

export function traverseNode (node: VirtualLayoutJSON | VirtualLayoutJSON[], callback: (node: { type?: string | Function }) => void) {
    if (Array.isArray(node)) {
      node.forEach((child) => {
        traverseNode(child, callback)
      });
    } else {
      callback(node);
      node?.children?.forEach((child) => {
        if (typeof child === 'object' && 'type' in child) {
          traverseNode(child, callback)
        }
      });
    }
}