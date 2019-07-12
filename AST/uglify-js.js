var Uglify = require("Uglify-js");
var code = "var a = 1";
var toplevel = Uglify.parse(code);
var transformer = new Uglify.TreeTransformer(function(node){
  // console.log(node)
  if(node instanceof Uglify.AST_Number) {
    node.value = "Ox" + Number(node.value).toString(16);
    return node;
  }
})
console.log(transformer)
toplevel.transform(transformer);
var ncode = toplevel.print_to_string();
console.log(ncode);
