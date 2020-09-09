window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  style(node, name, value) {
    if (arguments.length === 3) {
      //三个参数的时候（dom.style(div,'color','red'))
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //两个参数的时候（dom.style(div,'color'))
        return node.style[name];
      } else if (name instanceof Object) {
        //元素后面接一个对象的时候(div,{color: 'red'})
        for (let key in name) {
          node.style[key] = name[key];
        }
      }
    }
  },
};
