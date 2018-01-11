import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    g_tk: 5381,
    notice: 0,
    uin: 0,
    format: 'jsonp',
    _: 1515630507987
  })
  return jsonp(url, data, options)
}

export function getMusicList(id) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    g_tk: 5381,
    notice: 0,
    uin: 0,
    format: 'json',
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: 4
  })
  return jsonp(url, data, options)
}
