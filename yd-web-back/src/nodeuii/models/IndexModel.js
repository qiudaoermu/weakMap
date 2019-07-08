/**
 * @fileOverview 实现Index数据模型
 * @author yuanzhijia@yidengxuetang.com
 */
/**
 * IndexModle类 生成一段异步数据
 * @class
 */
export default class IndexModle {
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
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve('IndexAction异步数据');
      }, 1000);
    })
  }
}