import { SlateElement } from "@wangeditor/editor";
import { setPropertys } from "./utils/vnode";
import { DOMElement } from "@wangeditor/editor/dist/editor/src/utils/dom";
import { Descendant } from "slate";

/**
 * 
 * @param $node 
 * @param node 
 * @returns 
 */
export function parseStyleHtml($node: DOMElement, node: Descendant): Descendant {
    if (!SlateElement.isElement(node)) return node
    // @ts-ignore
    const dataset = $node.dataset;
    // @ts-ignore
    if (!node.metadata) node.metadata = {};
    // @ts-ignore
    setPropertys(node.metadata, {
        // @ts-ignore
        dataset,
        // @ts-ignore
        props: {
            className: Object.values($node.classList),
            id: $node.id,
        }
    });
    return node;
}