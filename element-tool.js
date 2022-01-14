
// element-tool @ npm, dom element tool, extend module ele-tool.

var ele_tool = require("ele-tool");
var ele_id = require("ele-id");

//extend module ele-tool
module.exports = exports = ele_tool;

exports.id = ele_id;
exports.eleId = ele_id;
exports.fromId = ele_id.from;
