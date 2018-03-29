



function FQuery(selector) {
    return new FQuery.fn.init(selector)
}


FQuery.fn = FQuery.prototype;


let match = [];



FQuery.prototype.init = function (selector) {
        let idorName= document.querySelectorAll(selector);
        this[0] = idorName;
};


FQuery.extend = FQuery.fn.extend = function (arg) {
    for(var i in arg){
        this[i] = arg[i]
    }
    return this
};


FQuery.fn.init.prototype = FQuery.fn;





FQuery.fn.extend({
    val:function () {
        var elem;
        var arr = [];
        for (var i = 0; i < this[0].length; i++) {
            console.log();
            arr.push(this[0][i].value)
        }
        return arr.join(",")
    },
    html:function () {
        var elem;
        var arr = [];
        for (var i = 0; i < this[0].length; i++) {
            console.log();
            arr.push(this[0][i].innerHTML)
        }
        return arr.join(",")
    }

});

