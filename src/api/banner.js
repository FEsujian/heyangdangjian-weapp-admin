import request from '@/utils/request'

export function getBannerList() {
  return request({
    url: '/user/getBanner',
    method: 'get'
  })
}

export function modifyBannerById(data) {
  return request({
    url: '/user/modifyBannerById',
    method: 'post',
    data
  })
}
