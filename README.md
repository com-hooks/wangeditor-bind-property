## wangeditor 富文本添加自定义class  dataset

### 使用
```js
// main.js
import { Boot } from '@wangeditor/editor'
import setPropertyModule from 'wangeditor-bind-property';
import 'wangeditor-bind-property/dist/styles/layout.css';
Boot.registerModule(setPropertyModule);
```

### config
```js
// toolbarConfig
const config = {
    insertKeys: {
        index: 24, // 插入的位置，基于当前的 toolbarKeys
        keys: ['customProperties'] // 菜单
    },
    excludeKeys:[]
}
```

### MENU_CONF
```js
const menuConfig = {
    MENU_CONF: {
        customProperties: {
            // 默认使用内部 提供的 DEFAULT_MENU_LIST
            list: [
               // .... 更多配置
                {
                    value: 'flex',
                    text: '弹性盒',
                    selected: false,
                }],
        }
    }
}
```