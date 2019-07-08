'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @fileOverview 实现Index数据模型
 * @author yuanzhijia@yidengxuetang.com
 */
/**
 * IndexModle类 生成一段异步数据
 * @class
 */
let DataService = class DataService {
  /**
   * @constructor
   * @param {string} app koa2上下文
   */
  constructor(app) {}
  /**
   * 获取具体数据的API接口
   * @returns {Promise} 返回异步数据
   * @example 
   * return new Promise
   * getData()
   */
  getData() {
    return new Promise(resolve => {
      setTimeout(function () {
        resolve('dataService');
      }, 1000);
    });
  }
};
exports.default = DataService;
