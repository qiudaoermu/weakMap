




( function ( global,factory ) {

    factory(global);

    //cmd模块
    if( typeof module === 'object'&&typeof module.exports === "object" ) {
        module.exports  = factory(global)
    }

    //amd模块
    if ( typeof define === "function" && define.amd ) {
        define( "jquery", factory(global) );
    }


} )( window,function (global) {

    function FQuery(selector) {
        return new FQuery.fn.init(selector)
    }


    FQuery.fn = FQuery.prototype;


    let match = [];


    FQuery.prototype.init = function (selector) {
        let self = this;
        if( typeof selector === "object" ){
            self[0] = document.body
        }else if( typeof selector === "string" ){
            // class
            // id
            // li
            if(selector.indexOf(".") !== -1 ){

                self[0] = document.getElementsByClassName( selector.replace(".","") )

            }else if( selector.indexOf("#") !== -1 ){

                self[0] = document.getElementById( selector.replace("#","")  )

            }else{
                self[0] = document.getElementsByTagName( selector )
            }
        }else{
            throw new TypeError( "selector must be string or Object" );
        }


    };


    FQuery.extend = FQuery.fn.extend = function (arg) {
        for(let i in arg){
            this[ i ] = arg[ i ]
        }
        return this
    };


    FQuery.fn.init.prototype = FQuery.fn;


    FQuery.fn.extend({
        val:function () {
            let elem;
            let arr = [];
            for (let i = 0; i < this[0].length; i++) {
                console.log();
                arr.push(this[0][i].value)
            }
            return arr.join(",")
        },
        html:function () {
            let elem;
            let arr = [];
            for ( let i = 0; i < this[0].length; i++ ) {
                console.log();
                arr.push(this[0][i].innerHTML)
            }
            return arr.join(",")
        }
    });


    global.$ = FQuery;
});