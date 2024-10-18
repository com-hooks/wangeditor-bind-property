/**
 * @description DOM 操作
 */

import $, {
    css,
    append,
    prepend,
    addClass,
    removeClass,
    hasClass,
    on,
    off,
    focus,
    attr,
    hide,
    show,
    parents,
    dataset,
    val,
    text,
    removeAttr,
    children,
    html,
    remove,
    find,
    width,
    height,
    Dom7Array,
    filter,
    empty,
  } from 'dom7'
  export { Dom7Array } from 'dom7'
  
  if (css) $.fn.css = css
  if (append) $.fn.append = append
  if (prepend) $.fn.prepend = prepend
  if (addClass) $.fn.addClass = addClass
  if (removeClass) $.fn.removeClass = removeClass
  if (hasClass) $.fn.hasClass = hasClass
  if (on) $.fn.on = on
  if (off) $.fn.off = off
  if (focus) $.fn.focus = focus
  if (attr) $.fn.attr = attr
  if (removeAttr) $.fn.removeAttr = removeAttr
  if (hide) $.fn.hide = hide
  if (show) $.fn.show = show
  if (parents) $.fn.parents = parents
  if (dataset) $.fn.dataset = dataset
  if (val) $.fn.val = val
  if (text) $.fn.text = text
  if (html) $.fn.html = html
  if (children) $.fn.children = children
  if (remove) $.fn.remove = remove
  if (find) $.fn.find = find
  if (width) $.fn.width = width
  if (height) $.fn.height = height
  if (filter) $.fn.filter = filter
  if (empty) $.fn.empty = empty
  
  export default $
  
  /**
   * 获取 outerHTML
   * @param $elem dom7 elem
   */
  export function getOuterHTML($elem: Dom7Array) {
    if ($elem.length === 0) return ''
    return $elem[0].outerHTML
  }
  
  /**
   * 获取 tagName lower-case
   * @param $elem $elem
   */
  export function getTagName($elem: Dom7Array): string {
    if ($elem.length) return $elem[0].tagName.toLowerCase()
    return ''
  }
