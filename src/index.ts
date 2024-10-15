import { IDomEditor, IModuleConf } from '@wangeditor/editor';
import { styleToHtml } from './style_to_html';
import { renderStyle } from './render_style';
import { parseStyleHtml } from './parse_style_html';
import { menus, DEFAULT_MENU_LIST } from './menus';

export {
    DEFAULT_MENU_LIST,
}

const module: IModuleConf = {
    menus,
    parseStyleHtml,
    renderStyle,
    styleToHtml,
    renderElems: [],
    elemsToHtml: [],
    preParseHtml: [],
    parseElemsHtml: [],
    editorPlugin: function <T extends IDomEditor>(editor: T): T {
        return editor;
    }
}
export default module;