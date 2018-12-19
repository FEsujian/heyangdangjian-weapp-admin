import request from '@/utils/request'

export function getBannerList() {
  return request({
    url: '/user/getBanner',
    method: 'get'
  })
}
