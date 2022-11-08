// 判断点是否在四边形内
export const isPointInPath = function(testx, testy, position) {
  let i = 0;
  let j = 0;
  let c = false;
  const nvert = 4;
  const vertx = position.map((p) => p[0]);
  const verty = position.map((p) => p[1]);

  for (i = 0, j = nvert - 1; i < nvert; j = i++) {
    if (
      verty[i] > testy != verty[j] > testy &&
      testx <
        ((vertx[j] - vertx[i]) * (testy - verty[i])) / (verty[j] - verty[i]) +
          vertx[i]
    ) {
      c = !c;
    }
  }
  return c;
};

// 中垂线长度
const LINE = 30;

// 计算中垂线的两个点坐标
export const calcMidLine = function(p1, p2, position) {
  // 两两的点 （连成一条线），并把四个点传过来
  // console.log("calcMidLine---p1, p2, position",p1, p2, position);
  let xm = (p1[0] + p2[0]) / 4;
  if (p2[0] - 2 * xm === 0) {
    p1 = [p1[0] - 1, p1[1] - 1];
    xm = (p1[0] + p2[0]) / 4;
  }

  const ym = (p1[1] + p2[1]) / 4;
  const e =
    (4 * xm * xm + 4 * ym * ym - 2 * p2[0] * xm - 2 * ym * p2[1]) /
    (p2[0] - 2 * xm);
  const d = (2 * ym - p2[1]) / (p2[0] - 2 * xm);

  const a = d * d + 1;
  const b = 2 * d * (e + 2 * xm) + 4 * ym;
  const c = LINE * LINE - 4 * ym * ym - (e + 2 * xm) * (e + 2 * xm);

  const y1 = (b + Math.sqrt(b * b + 4 * a * c)) / 2 / a;
  const x1 = y1 * d - e;
  const y2 = (b - Math.sqrt(b * b + 4 * a * c)) / 2 / a;
  const x2 = y2 * d - e;

  const x = xm + (xm + (xm + (xm + x1 / 2) / 2) / 2) / 2;
  const y = ym + (ym + (ym + (ym + y1 / 2) / 2) / 2) / 2;
  const inner = isPointInPath(x, y, position);
  const point = inner ? [[x1, y1], [x2, y2]] : [[x2, y2], [x1, y1]];

  return point;
};

// 判断两条线段是否相交
export const judgeIntersect = function(x1, y1, x2, y2, x3, y3, x4, y4) {
  if (
    !(
      Math.min(x1, x2) <= Math.max(x3, x4) &&
      Math.min(y3, y4) <= Math.max(y1, y2) &&
      Math.min(x3, x4) <= Math.max(x1, x2) &&
      Math.min(y1, y2) <= Math.max(y3, y4)
    )
  ) {
    return false;
  }
  const u = (x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1);
  const v = (x4 - x1) * (y2 - y1) - (x2 - x1) * (y4 - y1);
  const w = (x1 - x3) * (y4 - y3) - (x4 - x3) * (y1 - y3);
  const z = (x2 - x3) * (y4 - y3) - (x4 - x3) * (y2 - y3);
  return u * v <= 0.00000001 && w * z <= 0.00000001;
};
