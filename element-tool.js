
// element-tool @ npm, dom element tool, extend module ele-tool.

//extend module ele-tool
module.exports = exports = require("ele-tool");

//same as document.getElementById()
exports.fromId = function (id) { return document.getElementById(id); }

//seed for .id()
var seed = 0;

//create and set element a new unique id, or return the existed id.
exports.id = function (el, prefix) {
	if (el && el.id) return el.id;
	if (!prefix) prefix = "ele-id-";

	var sid;
	while (document.getElementById(sid = prefix + (++seed))) { };

	return el ? (el.id = sid) : sid;
}
