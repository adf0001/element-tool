
//global variable, for html page, refer tpsvr @ npm.
element_tool = require("../element-tool.js");

module.exports = {

	"element_tool()": function (done) {
		return element_tool('divResult') === document.getElementById('divResult') &&
			element_tool(document.getElementById('divResult')) === document.getElementById('divResult');
	},
	".fromId()": function (done) {
		return element_tool.fromId('divResult') === document.getElementById('divResult');
	},
	".id()": function (done) {
		element_tool('divResult2').innerHTML = '<span>child</span>';
		showResult('new id= ' + element_tool.id(element_tool('divResult2').firstChild) + ', new id2= ' + element_tool.id(), 3);
		return element_tool('divResult2').firstChild.id &&
			element_tool.id(document.getElementById('divResult2')) === 'divResult2';
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('element_tool', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
