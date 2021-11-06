
// element-tool @ npm, dom element tool. lib: ele()

module.exports = function (idOrEl) { return (typeof idOrEl === "string") ? document.getElementById(idOrEl) : idOrEl; }
