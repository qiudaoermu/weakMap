<!-- canvas -->
<template>
    <div class="content">
        <div class="name-content" @click="clickName">设备一</div>
        <!-- 背景图 -->
        <img v-if="bgImg" :src="bgImg" alt="" class="img">
        <div v-else class="empty-img">暂无抓拍图片,请重新抓拍</div>

        <!-- 画布 -->
        <canvas ref="myCanvas" class="canvas" :width="swidth" :height="sheight"></canvas>
    </div>
</template>

<script>
import { isPointInPath, calcMidLine, judgeIntersect } from "./canvas.js";

export default {
  props: {},

  data() {
    return {
      bgImg: "http://snapshot/2ca59c085bf8.jpg", // 抓拍的图片（假得！）
      canvas: null, // canvas对象
      position: [], // 四边形四个点的坐标
      midPosition: [], // 中垂线坐标
      imgData: null, // 缓存四边形
      hasPoint: false, // 是否已经绘制了四个顶点
      isDragging: false, // 能否拖拽
      isDrawing: false, // 是否正在绘制
      isMoving: false, // 是否可一动四边形
      selectIdx: -1, // 当前选中的顶点下标
      point: [], // 点击四边形内部当下的点坐标
      swidth: 960,
      sheight: 540,
    };
  },

  watch: {},
  mounted() {
    this.canvas = this.$refs.myCanvas;
    this.initData();
    this.bindEvent();
  },

  methods: {
    clickName() {
      console.log("this.position", this.position); // 拖拽以后四个顶点的坐标位置
    },
    initData() {
      this.getImg();
      this.getPc6Configuration();
    },
    /** 获取抓拍图片 */
    getImg() {},
    /** 获取pc6数据 */
    getPc6Configuration() {
      const arr = [
        { x: 0.25, y: 0.25 },
        { x: 0.75, y: 0.25 },
        { x: 0.75, y: 0.75 },
        { x: 0.25, y: 0.75 },
      ];
      if (arr.length === 4) {
        this.position = arr.map((p) => [p.x * this.swidth, p.y * this.sheight]);
        this.initDraw();
      }
    },

    /** 初始化四边形 */
    initDraw(type = "", position = []) {
      if (type !== "draw") {
        position = this.position;
      }
      const ctx = this.canvas.getContext("2d");
      ctx.strokeStyle = "#FF0000"; // 设置线颜色
      ctx.beginPath(); // 开始路径绘制
      ctx.lineWidth = 3;
      position.forEach((p, idx) => {
        if (idx === 0) {
          ctx.moveTo(...p);
        } else {
          ctx.lineTo(...p);
        }
      });
      ctx.closePath();
      ctx.stroke(); // 进行线的着色，这时整条线才变得可见
      if (this.position.length < 4) {
        return;
      }
      this.drawMidLine();
      this.imgData = ctx.getImageData(0, 0, this.swidth, this.sheight); // 复制画布上指定矩形的像素数据，然后通过 putImageData() 将图像数据放回画布：======图片大小 960*540
      type === "drag" && this.drawPoint();
    },

    /** 绘制中垂线 */
    drawMidLine() {
      this.position.forEach((p, idx) => {
        const mid =
          idx === 3
            ? calcMidLine(p, this.position[0], this.position)
            : calcMidLine(p, this.position[idx + 1], this.position);
        const ctx = this.canvas.getContext("2d");

        const headlen = 6; // 自定义箭头线的长度
        const theta = 45; // 自定义箭头线与直线的夹角，（45度数刚好）
        let arrowX, arrowY; // 箭头线终点坐标
        // 计算各角度和对应的箭头终点坐标
        const angle =
          (Math.atan2(mid[0][1] - mid[1][1], mid[0][0] - mid[1][0]) * 180) /
          Math.PI; // 返回从原点(0,0)到(x,y)点的线段与x轴正方向之间的平面角度(弧度值)
        const angle1 = ((angle + theta) * Math.PI) / 180;
        const angle2 = ((angle - theta) * Math.PI) / 180;
        const topX = headlen * Math.cos(angle1);
        const topY = headlen * Math.sin(angle1);
        const botX = headlen * Math.cos(angle2);
        const botY = headlen * Math.sin(angle2);

        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ffa51c";
        // 画直线
        ctx.moveTo(...mid[0]);
        ctx.lineTo(...mid[1]);

        arrowX = mid[1][0] + topX;
        arrowY = mid[1][1] + topY;

        // 画上边箭头线
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(mid[1][0], mid[1][1]);

        arrowX = mid[1][0] + botX;
        arrowY = mid[1][1] + botY;

        // 画下边箭头线
        ctx.lineTo(arrowX, arrowY);
        ctx.closePath();
        ctx.fillStyle = "#ffa51c";
        ctx.fill();
        // 绘制文字
        const char = String.fromCharCode(65 + idx); // 将 Unicode 编码转为一个字符
        ctx.font = "16px Georgia";
        const xm = (mid[0][0] + mid[1][0]) / 2;
        const ym = (mid[0][1] + mid[1][1]) / 2;
        ctx.fillText(char, xm, ym);
        ctx.stroke();
        this.midPosition[idx] = [...mid, [xm, ym], [char]];
      });
      // console.log("this.midPosition",this.midPosition)
    },

    /** 绘制四个顶点 */
    drawPoint() {
      this.hasPoint = true;
      const ctx = this.canvas.getContext("2d");
      this.position.forEach((p) => {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#FF0000";
        ctx.arc(...p, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.stroke();
      });
    },

    /** 监听鼠标事件 */
    bindEvent() {
      this.handleMouseUp();
      this.handleMouseDown();
      this.handleMouseMove();
    },
    /** 停止拖拽 */
    handleMouseUp() {
      console.log("handleMouseUp-handleMouseUp-handleMouseUp");
      let _this = this;
      this.canvas.onmouseup = function() {
        _this.isDragging = false;
        _this.isMoving = false;
      };
      this.canvas.onmouseout = function() {
        _this.isDragging = false;
        _this.isMoving = false;
      };
    },

    /** 鼠标按下事件 */
    handleMouseDown() {
      let _this = this;
      this.canvas.onmousedown = function(e) {
        e = e || event;
        const x = e.offsetX;
        const y = e.offsetY;
        // 绘制图像
        if (_this.isDrawing) {
          // 有个按钮--绘制区域(未使用到)--有个一键清空canvas的效果
          _this.position.push([x, y]);
          _this.clearCanvas();
          _this.initDraw();
          if (_this.position.length === 4) {
            _this.isDrawing = false;
          }
        } else {
          if (_this.position.length === 0) {
            return;
          }

          // 判断点击的是哪个点
          _this.position.forEach((p, idx) => {
            var line = Math.abs(
              Math.sqrt(Math.pow(p[0] - x, 2) + Math.pow(p[1] - y, 2))
            ); // 函数返回一个数的平方根
            if (line - 8 < 0) {
              _this.isDragging = true;
              _this.selectIdx = idx;
            }
          });

          // 判断是否点击了四边形内部
          if (isPointInPath(x, y, _this.position)) {
            !_this.hasPoint && _this.drawPoint();
            if (!_this.isDragging) {
              _this.isMoving = true;
              _this.point = [x, y];
            }
          } else if (_this.hasPoint && !isPointInPath(x, y, _this.position)) {
            _this.clearCanvas("cache");
            _this.hasPoint = false;
          }
        }
      };
    },

    /** 拖拽重新绘制 */
    handleMouseMove() {
      let _this = this;
      this.canvas.onmousemove = function(e) {
        e = e || event;
        const x = e.offsetX;
        const y = e.offsetY;

        // 手动绘制
        if (_this.isDrawing && _this.position.length > 0) {
          _this.clearCanvas();
          _this.initDraw("draw", _this.position.concat([[x, y]]));
        }
        // 判断是否可以拖动顶点
        if (_this.isDragging) {
          _this.position[_this.selectIdx] = [x, y];
          _this.clearCanvas("drag");
          _this.initDraw("drag");
        }
        // 移动整个四边形
        if (_this.isMoving) {
          _this.position.forEach((p) => {
            p[0] += x - _this.point[0];
            p[1] += y - _this.point[1];
          });
          _this.position = [x, y];
          _this.clearCanvas();
          _this.initDraw("drag");
        }
      };
    },

    /** 清空画布 */
    clearCanvas(type) {
      const ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      type === "cache" && ctx.putImageData(this.imgData, 0, 0);
      if (type === "rest") {
        this.position = [];
      }
    },
  },
};
</script>

<style  scoped>
.content {
  position: relative;
}
.name-content {
  height: 20px;
}
.img {
  width: 960px;
  height: 540px;
}
.empty-img {
  width: 960px;
  height: 540px;
  text-align: center;
  line-height: 540px;
  float: left;
}
.canvas {
  position: absolute;
  top: 20px;
  left: 0;
}
</style>
