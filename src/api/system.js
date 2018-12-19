import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/system/getUserList',
    method: 'get',
    params
  })
}
