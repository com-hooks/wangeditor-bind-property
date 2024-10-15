
export function addVnodeProps(vnode: Record<string, any>, newData: Record<string, any>) {
    if (vnode.data == null) vnode.data = {};
    const data = vnode.data;
    if (data.dataset == null) data.dataset = {};
    if (data.props == null) data.props = {};
    Object.assign(data.dataset, newData.dataset);
    for (let key in newData.props) {
        const item = newData.props[key];
        if (key === 'className') {
            data.props.className = [...new Set([...item]).values()].filter(Boolean).join(' ');
        } else {
            Reflect.set(data.props, key, item);
        }
    }
}

export function setPropertys($elem: object, attrs: Record<string, string>) {
    for (let key in attrs) {
        Reflect.set($elem, key, attrs[key]);
    }
}

export function convertHyphenToCamel(str: string) {
    return str.replace(/-([a-z])/g, function (match, group1) {
      return group1.toUpperCase();
    });
  }