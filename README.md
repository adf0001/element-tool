# element-tool
dom element tool

# Install
```
npm install element-tool
```

# Usage & Api
```javascript

var ele = require("element-tool");

//.ele(idOrEl)
ele('divResult') === document.getElementById('divResult') &&
ele(document.getElementById('divResult')) === document.getElementById('divResult');

//.eleFromId(id)
ele.eleFromId('divResult') === document.getElementById('divResult');

//.eleId(el, prefix)
ele('divResult2').innerHTML = '<span>child</span>';
console.log('new id= ' + ele.eleId(ele('divResult2').firstChild) + ', new id2= ' + ele.eleId());
ele.eleId(document.getElementById('divResult2')) === 'divResult2';

//.sibling(el, offset)
ele.sibling(ele('divResult2'), 1) === ele('divResult3') &&
ele.sibling(ele('divResult3'), -1) === ele('divResult2');

```
