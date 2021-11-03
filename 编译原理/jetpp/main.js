let path = "@/assets/images/";

let requireModuleKey = require.context("@/assets/images/", false, /\.png$/);
let imagesNameMap = {};
for (let i = 0; i < requireModuleKey.keys().length; i++) {
  const moduleName = requireModuleKey
    .keys()
    [i].substr(2, requireModuleKey.keys()[i].length);
  const source = require("@/assets/images/" + moduleName);
  imagesNameMap[moduleName.replace(/\.png/, "")] = source;
}

let requireModule = require.context(
  "@/assets/images/sponsers",
  false,
  /\.png$/
);
let imagesNameArr = [];
for (let i = 0; i < requireModule.keys().length; i++) {
  const moduleName = requireModule
    .keys()
    [i].substr(2, requireModule.keys()[i].length);
  const source = require("@/assets/images/sponsers/" + moduleName);
  imagesNameArr.push(source);
}

export default {
  ...imagesNameMap,
  sponser: imagesNameArr,
};
