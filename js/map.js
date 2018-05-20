

//map 可以创建一个新数组 实现对原数组的克隆 等操作

Array.prototype.Map = function myMap(callback,context){
    context = context || window;
    if( 'map' in Array.prototype) {
        this.map(callback,context);
    }
    //IE6-8下自己编写回调函数执行的逻辑
    var newAry = [];
    for(var i = 0,len = this.length; i < len;i++) {
        if(typeof  callback === 'function') {
            var val = callback.call(context,this[i],i,this);
            newAry[newAry.length] = val;
        }
    }
    return newAry;
}



var arr = [1,23,43,4546,523]
var trr = Array(100).join(',').split(',').Map(function(value,index){
	return index

})

console.log(trr)


//🍎 while for 效率比较
function testWhile(){
	console.time('whleiArr')
	let whleiArr = []
	var i = 1000000

	while(i>0){
		//console.log(i)
		whleiArr.push(i)
		i--
	}
	console.timeEnd('whleiArr')
}



function testFor(){
	console.time('testFor')

	let forArr = []
	var t = 1000000
	for(var i=0;i<t;i++){
		forArr.push(i)
	}
	console.timeEnd('testFor')

}

//经测试 for 效率低
testWhile()
testFor()
try {
	
}catch (e) {
	
}