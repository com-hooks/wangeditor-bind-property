import { ISelectMenu } from "@wangeditor/editor";
import { SetPropertyMenues } from "./properties";

export const DEFAULT_MENU_LIST = [
    {
        value: 'default',
        text: '属性',
        selected: false,
    },
    {
        value: 'flex',
        text: '弹性盒',
        selected: false,
    },
    {
        value: 'flex-start',
        text: '居左',
        selected: false,
    },
    {
        value: 'flex-end',
        text: '居右',
        selected: false,
    },
    {
        value: 'center',
        text: '居中',
        selected: false,
    },
    {
        value: 'justify-between',
        text: '两端对齐',
        selected: false,
    },
    {
        value: 'justify-around',
        text: '周围对齐',
        selected: false,
    },
    {
        value: 'column',
        text: '列方向',
        selected: false,
    },
    {
        value: 'row',
        text: '行方向',
        selected: false,
    },
    {
        value: 'border',
        text: '设置边框',
        selected: false,
    },
];
const menus = [{
    key: 'customProperties',
    factory: function (): ISelectMenu {
        return new SetPropertyMenues();
    },
    config: {
        list: DEFAULT_MENU_LIST,
    }
}]
export {
    menus,
}