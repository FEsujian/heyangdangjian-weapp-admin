import request from '@/utils/request'

export function getVideoList(params) {
  return request({
    url: '/getVideoList',
    method: 'get',
    params
  })
}

export function deleteVideoById(data) {
  return request({
    url: '/deleteVideoById',
    method: 'post',
    data
  })
}

export function newVideo(data) {
  return request({
    url: '/newVideo',
    method: 'post',
    data
  })
}
