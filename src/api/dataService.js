import axios from 'axios';
import CONFIG from './conf';

function doRequest(url, req, headers, param) {
  let h = headers ? headers : { 'Content-Type': 'application/json', 'BsmAjaxHeader': true }
  let r = req ? req : {}
  //return axios.post(CONFIG.baseUrl+"/login.do",obj,{'Content-Type': 'application/x-www-form-urlencoded','BsmAjaxHeader': true});
  return axios({
    url: url,
    method: 'POST',
    data: param ? $.param(r) : r,
    headers: h
  });
}

function doGetRequest(url, req, headers) {
  let h = headers ? headers : { 'Content-Type': 'application/json', 'BsmAjaxHeader': true }
  return axios.get(url, {
    params: req,
    headers: h
  })
}
export default {
  login(req){
    return doGetRequest('user/login',req)
  },
  register(req){
    return doGetRequest('user/register',req)
  },
  //价格获取  查询
  getPrice(req){
    return doGetRequest('/price/CPrice',req)
  },
  //订单新增
  orderAdd(req){
    return doGetRequest('/order/orderAdd',req)
  },
  //查询快递
  getInquiry(req){
    return doGetRequest('/order/inquiry',req)
  },
  //确认收货
  getRequire(req){
    return doGetRequest('/order/require',req)
  }
}
