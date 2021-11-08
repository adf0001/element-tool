// global, for html page
ele = require("../element-tool.js");

module.exports = {

	"ele()": function (done) {
		return ele('divResult') === document.getElementById('divResult') &&
			ele(document.getElementById('divResult')) === document.getElementById('divResult');
	},
	".fromId()": function (done) {
		return ele.fromId('divResult') === document.getElementById('divResult');
	},
	".id()": function (done) {
		ele('divResult2').innerHTML = '<span>child</span>';
		showResult('new id= ' + ele.id(ele('divResult2').firstChild) + ', new id2= ' + ele.id(), 3);
		return ele('divResult2').firstChild.id &&
			ele.id(document.getElementById('divResult2')) === 'divResult2';
	},
	".offset()": function (done) {
		return ele.offset(ele('divResult2'), 1) === ele('divResult3') &&
			ele.offset(ele('divResult3'), -1) === ele('divResult2');
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
