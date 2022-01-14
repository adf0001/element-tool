# element-tool
dom element tool, extend module ele-tool.

# Install
```
npm install element-tool
```

# Usage & Api
```javascript

var element_tool = require("element-tool");

//.ele(idOrEl)		//refer module ele-tool
element_tool('divResult') === document.getElementById('divResult') &&
element_tool(document.getElementById('divResult')) === document.getElementById('divResult');

//.fromId(id)		//same as document.getElementById()
element_tool.fromId('divResult') === document.getElementById('divResult');

//.id(el, prefix)		//create and set element a new unique id, or return the existed id.
element_tool('divResult2').innerHTML = '<span>child</span>';
console.log('new id= ' + element_tool.id(element_tool('divResult2').firstChild) + ', new id2= ' + element_tool.id());
element_tool.id(document.getElementById('divResult2')) === 'divResult2';

```
