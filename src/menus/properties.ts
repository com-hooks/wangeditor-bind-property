import { type IDomEditor, ISelectMenu, SlateTransforms } from "@wangeditor/editor";
import { PropertyElement } from "src/types";
import { convertHyphenToCamel } from "../utils/vnode";

export class SetPropertyMenues implements ISelectMenu {
    title: string;
    tag: string;
    selectPanelWidth: number;
    alwaysEnable: boolean;
    iconSvg: string;
    constructor() {
        this.title = '设置自定义属性';
        this.tag = 'select';
        this.iconSvg = '<svg></svg>';
        this.selectPanelWidth = 100;
        this.alwaysEnable = false;
    }
    getOptions(editor: IDomEditor) {
        const list = editor.getMenuConfig('customProperties').list;
        const { metadata = {} } = editor.getFragment()?.[0] as PropertyElement ?? {};
        const classNameList = metadata?.props?.className ?? [];
        const datasetList = Object.keys(metadata?.dataset ?? {});
        return list.map(property => {
            return {
                ...property,
                selected: classNameList.includes(`custom-class-${property.value}`) || datasetList.some(key => convertHyphenToCamel(key) === convertHyphenToCamel(property.value)),
            }
        });
    }
    getValue(editor: IDomEditor) {
        return 'default';
    }
    isActive(editor: IDomEditor) {
        return false;
    }
    isDisabled(editor: IDomEditor) {
        return false;
    }
    exec(editor: IDomEditor, value: string | boolean) {
        if (value === 'default') return;
        const { metadata } = editor.getFragment()?.[0] as PropertyElement ?? {};
        const oldClassNameList = [...(metadata?.props?.className ?? [])];
        const oldDataset = { ...(metadata?.dataset ?? {}) };
        const newValue = convertHyphenToCamel(value.toString());
        const newClassName = `custom-class-${value.toString()}`;
        if (oldDataset.hasOwnProperty(newValue)) {
            Reflect.deleteProperty(oldDataset, newValue);
        } else {
            Reflect.set(oldDataset, newValue, "true");
        }
        if (oldClassNameList.includes(newClassName)) {
            oldClassNameList.splice(oldClassNameList.indexOf(newClassName), 1);
        } else {
            oldClassNameList.push(newClassName);
        }
        // @ts-ignore
        SlateTransforms.setNodes(editor, {
            // @ts-ignore
            metadata: {
                dataset: oldDataset,
                props: {
                    className: oldClassNameList,
                },
            }
        },
            {
                mode: 'highest',
            }
        );
    }
}