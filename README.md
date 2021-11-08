# element-tool
dom element tool, extend module ele-tool.

# Install
```
npm install element-tool
```

# Usage & Api
```javascript

var ele = require("element-tool");

//.ele(idOrEl)		//refer module ele-tool
ele('divResult') === document.getElementById('divResult') &&
ele(document.getElementById('divResult')) === document.getElementById('divResult');

//.fromId(id)		//same as document.getElementById()
ele.fromId('divResult') === document.getElementById('divResult');

//.id(el, prefix)		//create and set element a new unique id, or return the existed id.
ele('divResult2').innerHTML = '<span>child</span>';
console.log('new id= ' + ele.id(ele('divResult2').firstChild) + ', new id2= ' + ele.id());
ele.id(document.getElementById('divResult2')) === 'divResult2';

//.offset(elOrId, idOffset)		//return another element by offsetting the tail number of an element id
ele.offset(ele('divResult2'), 1) === ele('divResult3') &&
ele.offset(ele('divResult3'), -1) === ele('divResult2');

```
