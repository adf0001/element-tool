
// element-tool @ npm, dom element tool.

var ele = require("ele-tool");

var eleFromId = function (id) { return document.getElementById(id); }

var seed = 0;

var eleId = function (el, prefix) {
	if (el && el.id) return el.id;
	if (!prefix) prefix = "ht-id-";

	var sid;
	while (document.getElementById(sid = prefix + (++seed))) { };

	return el ? (el.id = sid) : sid;
}

var sibling = function (el, offset) {
	var m = el.id.match(/^(\D+)(\d+)$/);
	return eleFromId(m[1] + (parseInt(m[2]) + offset));
}

//module

module.exports = exports = function () { return ele.apply(this, arguments); };		//default ele()

exports.ele = ele;
exports.eleFromId = eleFromId;
exports.eleId = eleId;
exports.sibling = sibling;
