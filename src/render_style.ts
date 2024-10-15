import { SlateElement } from "@wangeditor/editor";
import { PropertyElement } from "./types";
import { addVnodeProps } from "./utils/vnode";
import { Descendant } from 'slate';
import { VNode } from 'snabbdom';

/**
 * 
 * @param node 
 * @param vnode 
 * @returns 
 */
export function renderStyle(node: Descendant, vnode: VNode) {
    if (!SlateElement.isElement(node)) return vnode
    const { metadata = {} } = node as PropertyElement
    const styleVnode: VNode = vnode;
    addVnodeProps(styleVnode, metadata || {});
    return styleVnode;
}