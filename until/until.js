
function arrayToString(n) {
  return n.join('');
}

function stringToArray(n) {
  return n.split('');
}

// 降序
function bigToSmall(n) {
  return n.sort((a, b) => b - a);
}
// 升序
function smallToBig(n) {
  return n.sort((a, b) => a - b);
}

// 迭代相乘
function mutiply(n) {
  return n.reduce((a, b) => a * b);
}

