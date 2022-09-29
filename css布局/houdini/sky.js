class YdSk {
    constructor() {

    }
    static get inputProperties() {
       return [" --star-opacity", "--star-density"]
    }
    paint(ctx, paintSize,poperties) {
       let xMax = paintSize.width;
       let yMax = paintSize.height;
       let starOpacity = poperties.get("--star-opacity") || 1;
       let starDensidy = poperties.get("--star-density").toString() || 1;
       starDensidy > 1&& (starDensidy=1); //密度控制星星的个数
       // 每个星星的透明度
       let hmTimes = Math.round((xMax+yMax)* starDensidy);
       for (let i=0;i<hmTimes;i++) {
        let x = Math.floor(Math.random() * xMax+1);
        let y = Math.floor(Math.random()* yMax+1);
        let size = Math.floor(Math.random()*2+1);
        let o1 = Math.floor(Math.random()*9 +1);
        let o2 = Math.floor(Math.random()*9 +1);
        let opacity = +("." + (o1 + o2)) * starOpacity;
        let hue = Math.floor(Math.random() * 360+1);
        //随机的点，随机的大小
        debugger
        ctx.fillStyle= `hsla(${hue}, 30%, 80%, ${opacity})`
        ctx.fillRect(x,y,size,size);
       }
       ctx.fillRect(0,0,xMax,yMax);
    }
 }
registerPaint("yd-sky", YdSk)