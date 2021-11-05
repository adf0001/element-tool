// global, for html page
ele = require("../element-tool.js");

module.exports = {

	"ele()": function (done) {
		return ele('divResult') === document.getElementById('divResult') &&
			ele(document.getElementById('divResult')) === document.getElementById('divResult');
	},
	".eleFromId()": function (done) {
		return ele.eleFromId('divResult') === document.getElementById('divResult');
	},
	".eleId()": function (done) {
		ele('divResult2').innerHTML = '<span>child</span>';
		showResult('new id= ' + ele.eleId(ele('divResult2').firstChild) + ', new id2= ' + ele.eleId(), 3);
		return ele('divResult2').firstChild.id &&
			ele.eleId(document.getElementById('divResult2')) === 'divResult2';
	},
	".sibling()": function (done) {
		return ele.sibling(ele('divResult2'), 1) === ele('divResult3') &&
			ele.sibling(ele('divResult3'), -1) === ele('divResult2');
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
