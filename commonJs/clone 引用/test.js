import {
  makePost
} from './_helper';
const url = "xxx.xxx.xx";
export default {
  // 未支付订单
  getUnpayOrder(id) {
    return makePost(`${url}/gw/order/getUnpayOrder`, {
      openId: id
    });
  },
  // 再次支付
  payAgain(openId, goodId) {
    return makePost(`${url}/gw/order/getUnpayOrder`, {
      openId,
      goodId
    });
  },
  // 创建订单
  creOrderAndTopay(openId, goodsId, referId, receiverTel, receiverName, receiverAddress, mallGoodsSpecIds, specCounts) {
    return makePost(`${url}/gw/order/creOrderAndTopay`, {
      openId,
      goodsId,
      referId,
      receiverTel,
      receiverName,
      receiverAddress,
      mallGoodsSpecIds,
      specCounts
    });
  },
  // 收益明细
  getUserPartnerDetail(openId, type) {
    return makePost(`${url}/gw/partner/getUserPartnerDetail`, {
      openId,
      type
    });
  },
  // 登陆
  login(appId, openId, mobile, smsCode) {
    return makePost(`${url}/gw/portal/login`, {
      appId,
      openId,
      mobile,
      smsCode
    });
  }
}