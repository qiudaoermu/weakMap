// lib/template.ejs

(function (modules) {
    var installedModules = {};
  
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports;
      }
  
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: false,
        exports: {}
      };
  
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.l = true;
      return module.exports;
    }
  
    return __webpack_require__(__webpack_require__.s = "./../../src/app.js");
})
({
    
        "./../../src/app.js":
        (function (module, exports, __webpack_require__) {
            eval("\"use strict\";\n\nvar _moduleA = __webpack_require__(\"./../../src/js/moduleA.js\");\n\n__webpack_require__(\"./../../src/style/init.styl\");\n\n__webpack_require__(\"./../../src/style/test.less\");\n\nvar oli = document.createElement('li');\noli.innerHTML = 'this is lio';\ndocument.body.appendChild(oli);\nvar oH1 = document.createElement('h1');\noH1.innerHTML = 'Hello ' + _moduleA.name;\ndocument.body.appendChild(oH1);");
        }),
    
        "./../../src/js/moduleA.js":
        (function (module, exports, __webpack_require__) {
            eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.name = void 0;\nvar name = 'xuyede';\nexports.name = name;");
        }),
    
        "./../../src/style/init.styl":
        (function (module, exports, __webpack_require__) {
            eval("let style = document.createElement('style');\nstyle.innerHTML = \"h1 {\\n  color: #000;\\n}\\n\";\ndocument.body.appendChild(style);");
        }),
    
        "./../../src/style/test.less":
        (function (module, exports, __webpack_require__) {
            eval("let style = document.createElement('style');\nstyle.innerHTML = \"li {\\n  color: green;\\n}\\n\";\ndocument.body.appendChild(style);");
        }),
    
});
