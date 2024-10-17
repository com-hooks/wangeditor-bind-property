import { SlateElement } from "@wangeditor/editor";
import { PropertyElement } from "./types";
import { setPropertys } from "./utils/vnode";
import { Descendant } from "slate";
import * as $ from 'jquery';

export function styleToHtml(node: Descendant, elemHtml: string) {
    if (!SlateElement.isElement(node)) return elemHtml
    const { metadata } = node as PropertyElement
    if (!metadata) return elemHtml
    // 设置样式
    const $elem = $(elemHtml)?.get(0);
    if (!$elem) return elemHtml;
    setPropertys($elem.dataset, metadata.dataset || {});
    const props = (metadata.props || {});
    if (props.className?.length) {
        $elem.classList.add(...props.className);
    }
    // 输出 html
    return $elem.outerHTML;
}